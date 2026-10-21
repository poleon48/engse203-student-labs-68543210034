# Campus Service Data Model

users (1) → requests (หลายรายการ) เชื่อมด้วย requests.requester_id → users.id

แยกตารางผู้ใช้จากคำร้องเพื่อไม่เก็บชื่อและภาควิชาซ้ำทุกคำร้อง หากผู้แจ้งเปลี่ยนชื่อ แก้ users เพียงแถวเดียว ผล JOIN ของคำร้องทั้งหมดจะแสดงชื่อใหม่ การเก็บชื่อซ้ำใน requests เสี่ยงแก้ไม่ครบและข้อมูลขัดแย้งกัน

| ตาราง | คอลัมน์ | ชนิดและข้อกำหนด |
|---|---|---|
| users | id | INTEGER PRIMARY KEY AUTOINCREMENT รหัสภายในระบบ |
| users | name, department | TEXT NOT NULL ข้อมูลที่ต้องมี |
| users | email | TEXT NOT NULL UNIQUE ป้องกันบัญชีซ้ำ |
| requests | id | TEXT PRIMARY KEY รหัสที่แสดงต่อผู้ใช้แบบ REQ-001 |
| requests | requester_id | INTEGER NOT NULL FOREIGN KEY อ้างผู้ใช้ที่มีจริง |
| requests | request_type, location, details | TEXT NOT NULL ประเภทจำกัดด้วย CHECK |
| requests | priority, status | TEXT พร้อม DEFAULT และ CHECK ป้องกันค่าผิด |
| requests | created_at | TEXT DEFAULT datetime('now','localtime') |

CHECK ในฐานข้อมูลยังจำเป็นแม้ API ตรวจแล้ว เพราะ SQL console หรือโปรแกรมอื่นอาจเขียนข้อมูลโดยไม่ผ่าน API Foreign key ป้องกันคำร้องที่ไม่มีเจ้าของ และลำดับ DROP ต้องลบ requests ก่อน users

ตัวอย่าง JOIN และผลจริงดู queries.sql ข้อ 5: SELECT r.id,u.name AS requesterName,r.status FROM requests r JOIN users u ON r.requester_id=u.id;

Week 10 ใช้ JOIN พร้อม alias requesterName เพื่อรักษารูปข้อมูลของ API เดิม React จึงไม่ต้องรู้ว่าข้อมูลเปลี่ยนจาก JSON เป็นฐานข้อมูล
