# วิธีสาธิตและผลตรวจ

1. Build frontend แล้วเปิด NODE_ENV=production npm start
2. GET /api/health ตรวจ status และ database.connected
3. เปิด Dashboard สร้างคำร้อง กรอง เปลี่ยนสถานะ และลบ
4. ดูผลตรวจอัตโนมัติที่ ../evidence/verification.txt

Deploy บน Render สำเร็จ: https://campus-service-68543210034-week11.onrender.com ดูผลตรวจจริงที่ ../evidence/deployment.json
