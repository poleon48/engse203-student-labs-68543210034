# วิธีสาธิตและผลตรวจ

1. Build frontend แล้วเปิด NODE_ENV=production npm start
2. GET /api/health ตรวจ status และ database.connected
3. เปิด Dashboard สร้างคำร้อง กรอง เปลี่ยนสถานะ และลบ
4. ดูผลตรวจอัตโนมัติที่ ../evidence/verification.txt

ยังไม่ได้ deploy cloud ในการกู้ครั้งนี้ ไม่มี URL cloud ที่ยืนยันแล้ว
