import { clearStoredRequests, readStoredRequests, writeStoredRequests } from './requestStorage.js';

async function fetchSeedRequests() {
  const baseUrl = import.meta.env?.BASE_URL ?? '/';
  const response = await fetch(`${baseUrl}data/initialRequests.json`);
  if (!response.ok) throw new Error('โหลดข้อมูลตัวอย่างไม่สำเร็จ กรุณาลองใหม่');
  return structuredClone(await response.json());
}

async function loadNormalRequests(onRecovery) {
  const stored = readStoredRequests();
  if (stored.status === 'valid') return stored.requests;
  const seed = await fetchSeedRequests();
  writeStoredRequests(seed);
  if (stored.status === 'invalid') onRecovery?.('ข้อมูลที่บันทึกเสียหาย คืนข้อมูลตัวอย่างแล้ว');
  return seed;
}

export async function getRequests(options = {}) {
  await new Promise(resolve => setTimeout(resolve, globalThis.__ENGSE203_SKIP_DELAY__ ? 0 : 420));
  if (options.scenario === 'error') throw new Error('LAB scenario: จำลองการโหลดข้อมูลไม่สำเร็จ');
  if (options.scenario === 'empty') return [];
  return loadNormalRequests(options.onRecovery);
}

export async function getRequestById(requestId) {
  const requests = await getRequests();
  return requests.find(request => request.id === requestId) ?? null;
}

export async function addRequest(input) {
  const fields = ['requesterName','requestType','location','details','priority'];
  if (!input || fields.some(field => typeof input[field] !== 'string' || !input[field].trim())) {
    throw new Error('กรุณากรอกข้อมูลให้ครบ');
  }
  const clean = Object.fromEntries(fields.map(field => [field,input[field].trim()]));
  if (clean.requesterName.length < 2 || clean.details.length < 10 || !['normal','urgent'].includes(clean.priority)) {
    throw new Error('ชื่ออย่างน้อย 2 ตัว รายละเอียดอย่างน้อย 10 ตัว และความเร่งด่วนต้องถูกต้อง');
  }
  const requests = await getRequests();
  let id;
  do { id = `REQ-${crypto.randomUUID()}`; } while (requests.some(request => request.id === id));
  const created = { ...clean, id, status: 'pending' };
  writeStoredRequests([created, ...requests]);
  return structuredClone(created);
}

export async function deleteRequest(requestId) {
  const requests = await getRequests();
  const remaining = requests.filter(request => request.id !== requestId);
  writeStoredRequests(remaining);
  return remaining;
}

export async function resetRequests() {
  clearStoredRequests();
  const seed = await fetchSeedRequests();
  writeStoredRequests(seed);
  return seed;
}

export async function updateRequestStatus(requestId, status) {
  if (!['pending','in-progress','completed'].includes(status)) throw new Error('สถานะไม่ถูกต้อง');
  const requests = await getRequests();
  const found = requests.find(request => request.id === requestId);
  if (!found) throw new Error('ไม่พบคำร้อง');
  found.status = status;
  writeStoredRequests(requests);
  return structuredClone(found);
}
