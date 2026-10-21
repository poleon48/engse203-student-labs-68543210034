# ENGSE203 — LAB Portfolio

ปฐมพร หลีจาง · 68543210034 · SEC2

[เปิด Portfolio](https://poleon48.github.io/engse203-student-labs-68543210034/)

หน้า Portfolio แสดง **12 LAB** จาก Week 01–07 และ 09–13 โดยซ่อนสอบกลางภาค Week 08 ตามที่เจ้าของงานต้องการ แต่ละงานมี Source และลิงก์ PR จริง

## สร้างและตรวจหน้า Portfolio

ต้องใช้ Node.js 22.13 ขึ้นไป

```bash
npm run build:pages
npm run verify
```

Source อยู่ใน labs/week-NN/source ยกเว้นข้อสอบกลางภาคเดิมอยู่ labs/midterm รายละเอียดติดตั้งและทดสอบอยู่ใน README ของแต่ละสัปดาห์ หลักฐานรอบกู้งานอยู่ evidence/verification.txt

Week 02–05 เปิด static web ได้จาก Pages ส่วน Week 01, 06, 07, 09 และ 10 ใช้หน้าสรุป Test Status, Submission และ Original Commit พร้อมปุ่ม Source/Evidence งาน Week 11–13 เตรียม deploy บน Render แล้วตาม [RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md) และจะเปิด Cloud Web Service เมื่อกำหนด URL ที่ deploy สำเร็จใน metadata

Week 05 ผ่าน 133/133, Week 06 ผ่าน 28/28 พร้อม persistence regression, Week 07 ผ่าน 36/36, Week 09 ผ่าน 30/30, Week 10 ผ่านภาคบังคับ 28/28, Week 11 ผ่าน 41/41, Week 12 ผ่านภาคบังคับ 20/20 และ Week 13 ผ่านภาคบังคับ 23/23 ดูผล Challenge ที่ยังไม่ผ่านใน evidence

ห้ามแก้ docs ด้วยมือ ให้แก้ source/publish/metadata แล้วรัน build:pages อีกครั้ง CI ตรวจ Week 12–13 และตรวจว่า docs สร้างซ้ำได้

ดู [AI_USAGE.md](AI_USAGE.md) สำหรับแหล่งโค้ดเดิมและการใช้ AI ในรอบนี้ และ [WEEKLY_LAB_WORKFLOW.md](WEEKLY_LAB_WORKFLOW.md) สำหรับ workflow ส่งงาน
