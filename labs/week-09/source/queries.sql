-- 1. ทั้งหมดเรียงรหัส
SELECT * FROM requests ORDER BY id;
-- 2. รอดำเนินการ
SELECT * FROM requests WHERE status='pending';
-- 3. เร่งด่วนและยังไม่เสร็จ
SELECT * FROM requests WHERE priority='urgent' AND status!='completed';
-- 4. ค้นคำบางส่วน
SELECT * FROM requests WHERE details LIKE '%ห้อง%';
-- 5. JOIN ชื่อผู้แจ้ง
SELECT r.id,u.name AS requesterName,r.status FROM requests r JOIN users u ON r.requester_id=u.id;
-- 6. เฉพาะภาควิชา
SELECT r.id,u.name,u.department FROM requests r JOIN users u ON r.requester_id=u.id WHERE u.department='วิศวกรรมซอฟต์แวร์';
-- 7. ผู้แจ้งไม่ซ้ำ
SELECT DISTINCT u.id,u.name FROM users u JOIN requests r ON r.requester_id=u.id;
-- 8. สามรายการล่าสุด ใช้รหัสตัดสินเมื่อเวลาเท่ากัน
SELECT * FROM requests ORDER BY created_at DESC,id DESC LIMIT 3;
-- 9. นับตามสถานะ
SELECT status,COUNT(*) AS total FROM requests GROUP BY status;
-- 10. ผู้แจ้งมากที่สุด รวมผู้ที่ไม่มีคำร้อง
SELECT u.id,u.name,COUNT(r.id) AS total FROM users u LEFT JOIN requests r ON r.requester_id=u.id GROUP BY u.id,u.name ORDER BY total DESC,u.id;
-- 11. ดัชนี
CREATE INDEX IF NOT EXISTS idx_requests_status ON requests(status);
