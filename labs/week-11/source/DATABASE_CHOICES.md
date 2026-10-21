# Database choices

SQLite เหมาะกับแลปนี้เพราะข้อมูล users และ requests มีความสัมพันธ์ชัดเจน ใช้ foreign key, CHECK, transaction และ JOIN ได้โดยไม่ต้องติดตั้ง server เพิ่ม ไฟล์เดียวสำรองง่ายและทดสอบด้วย :memory: ได้ แต่ระบบที่มีการเขียนพร้อมกันมากหรือหลาย instance ต้องประเมินฐานข้อมูลที่เป็น server

NoSQL เช่น MongoDB เก็บเอกสารยืดหยุ่น เหมาะกับข้อมูลที่รูปร่างเปลี่ยนมาก แต่ความสัมพันธ์ในงานนี้ใช้ relational model ตรงกว่า หากเปลี่ยน driver เป็นบริการฐานข้อมูลออนไลน์ มักต้องใช้ async/await เพราะมี network I/O และต้องจัดการ timeout, connection และ error การเปลี่ยน service เป็น async ต้องให้ controller await ตามด้วย
