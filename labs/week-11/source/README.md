# Campus Service — Week 11

สถาปัตยกรรม 3 ชั้น: frontend React ส่ง HTTP ไป Express API และ API อ่าน/เขียน SQLite database โดยแยก route, controller, service การทำ JOIN และ parameterized query อยู่ใน service ทำให้ React ใช้ requesterName ตาม contract เดิม

ติดตั้ง npm install --prefix frontend และ npm install --prefix api แล้วเปิด API ด้วย npm start --prefix api อีก terminal ใช้ npm run dev --prefix frontend กำหนด VITE_API_BASE_URL ใน frontend/.env.local หากพอร์ตต่างจากค่าเริ่มต้น

Production ใช้ npm run build จากโฟลเดอร์นี้และ NODE_ENV=production npm start; Express เสิร์ฟ frontend/dist และ /api บนพอร์ตเดียว PORT มาจาก environment ส่วน DB_FILE เลือกตำแหน่ง SQLite ตรวจสถานะที่ /api/health

การทดสอบ: node check-week11.mjs และ npm test --prefix api โดยใช้ DB_FILE=:memory: เพื่อไม่เปลี่ยนข้อมูลจริง ระบบที่ใช้ SQLite บนดิสก์ชั่วคราวอาจสูญข้อมูลเมื่อ cloud restart จึงต้องใช้ persistent disk หรือฐานข้อมูลภายนอกก่อนใช้งานจริง ดู DATABASE_CHOICES.md และ DEMO.md สำหรับวิธีตรวจ ไม่มีการอ้างว่า deploy สำเร็จจนกว่าจะมี URL และผลตรวจจากบริการจริง
