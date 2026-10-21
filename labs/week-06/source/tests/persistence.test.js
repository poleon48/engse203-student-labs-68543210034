import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

test('POST, status update and DELETE survive a service reload', async () => {
  const directory = await mkdtemp(path.join(tmpdir(), 'campus-persistence-'));
  const previous = process.env.REQUESTS_FILE;
  process.env.REQUESTS_FILE = path.join(directory, 'requests.json');
  try {
    const first = await import('../src/services/requestService.js?first');
    await first.loadSeed();
    const created = first.create({ requesterName: 'ทดสอบ ระบบ', requestType: 'แจ้งซ่อม', location: 'ห้อง 301', details: 'เครื่องปรับอากาศไม่ทำงาน', priority: 'normal' });
    first.updateStatus(created.id, 'completed');
    const second = await import('../src/services/requestService.js?second');
    await second.loadSeed();
    assert.equal(second.findById(created.id).status, 'completed');
    second.remove(created.id);
    const third = await import('../src/services/requestService.js?third');
    await third.loadSeed();
    assert.equal(third.findById(created.id), null);
  } finally {
    if (previous === undefined) delete process.env.REQUESTS_FILE;
    else process.env.REQUESTS_FILE = previous;
    await rm(directory, { recursive: true, force: true });
  }
});
