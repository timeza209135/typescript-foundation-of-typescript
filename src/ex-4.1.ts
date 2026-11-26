type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return (user.age ?? 0) >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ บรรทัดที่ 8 user.age เนื่องจาก age กำหนดให้เป็น optional property เมื่อไม่มีการส่งค่าตัว age เข้าไปทำให้เป็น undefine และ undefined ไม่สามารถเปรียบเทียบตามหลักคณิตได้จึงเกิด Error
