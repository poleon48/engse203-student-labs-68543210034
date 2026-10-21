# ENGSE203 — LAB Portfolio

ปฐมพร หลีจาง · 68543210034 · SEC2

[เปิด Portfolio](https://poleon48.github.io/engse203-student-labs-68543210034/)

หน้า Portfolio รวม Week 01–13: **12 LAB + 1 Midterm** (Week 08 เป็นสอบกลางภาค) แต่ละงานมี Source, Evidence, ผลตรวจอัตโนมัติ และลิงก์ PR จริง

## สร้างและตรวจหน้า Portfolio

ต้องใช้ Node.js 22.13 ขึ้นไป

```bash
npm run build:pages
npm run verify
```

Source อยู่ใน labs/week-NN/source ยกเว้นข้อสอบกลางภาคเดิมอยู่ labs/midterm รายละเอียดติดตั้งและทดสอบอยู่ใน README ของแต่ละสัปดาห์ หลักฐานรอบกู้งานอยู่ evidence/verification.txt

Week 02–05 และ midterm เปิด static web ได้จาก Pages ส่วนงาน API/SQLite/full-stack แสดงรายงานผลตรวจและวิธีรัน โดยไม่ได้อ้างว่ามี API บน GitHub Pages หรือ deploy cloud สำเร็จแล้ว

Week 05 ผ่าน 133/133, Week 06 ผ่าน 28/28 พร้อม persistence regression, Week 07 ผ่าน 36/36, Week 09 ผ่าน 30/30, Week 10 ผ่านภาคบังคับ 28/28, Week 11 ผ่าน 41/41, Week 12 ผ่านภาคบังคับ 20/20 และ Week 13 ผ่านภาคบังคับ 23/23 ดูผล Challenge ที่ยังไม่ผ่านใน evidence

ห้ามแก้ docs ด้วยมือ ให้แก้ source/publish/metadata แล้วรัน build:pages อีกครั้ง CI ตรวจ Week 12–13 และตรวจว่า docs สร้างซ้ำได้

ดู [AI_USAGE.md](AI_USAGE.md) สำหรับแหล่งโค้ดเดิมและการใช้ AI ในรอบนี้ และ [WEEKLY_LAB_WORKFLOW.md](WEEKLY_LAB_WORKFLOW.md) สำหรับ workflow ส่งงาน
