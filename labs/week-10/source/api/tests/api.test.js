import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from '../src/app.js';
import { loadSeed } from '../src/services/requestService.js';

const app = createApp();
beforeEach(async () => { await loadSeed(); });
const valid = { requesterName:'ทดสอบ ระบบ',requestType:'แจ้งซ่อม',location:'ห้อง 301',details:'เครื่องปรับอากาศไม่ทำงาน',priority:'normal' };

test('GET returns seeded requests', async () => {
  const r=await request(app).get('/api/requests'); assert.equal(r.status,200); assert.equal(r.body.length,5);
});
test('JOIN exposes requesterName', async () => {
  const r=await request(app).get('/api/requests'); assert.equal(typeof r.body[0].requesterName,'string'); assert.equal(r.body[0].requester_id,undefined);
});
test('GET existing id', async () => { await request(app).get('/api/requests/REQ-001').expect(200); });
test('GET unknown id', async () => { await request(app).get('/api/requests/REQ-999').expect(404); });
test('POST valid request persists', async () => {
  const r=await request(app).post('/api/requests').send(valid); assert.equal(r.status,201);
  const saved=await request(app).get(`/api/requests/${r.body.id}`); assert.equal(saved.body.details,valid.details);
});
test('POST invalid input', async () => { await request(app).post('/api/requests').send({}).expect(400); });
test('SQL injection is a bound value', async () => {
  const r=await request(app).get('/api/requests').query({status:"pending' OR 1=1 --"}); assert.equal(r.status,200); assert.deepEqual(r.body,[]);
});
test('PUT status persists', async () => {
  await request(app).put('/api/requests/REQ-001').send({status:'completed'}).expect(200);
  const r=await request(app).get('/api/requests/REQ-001'); assert.equal(r.body.status,'completed');
});
test('DELETE removes request', async () => {
  await request(app).delete('/api/requests/REQ-002').expect(204); await request(app).get('/api/requests/REQ-002').expect(404);
});
