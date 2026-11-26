// type User = {
//   id: string;
//   name: string;
//   age?: number;
// };

// function isAdult(user: User): boolean {
//   return user.age >= 18;
// }

// const result = isAdult({ id: "u01", name: "John" });
// console.log(result); // ควรได้ false

// Error ที่เจอคือ user.age >= 18 ไม่สามารถนำค่า undefined ไปเปรียบกับตัวเลขได้ เนื่องจากเรากำหนด type เป็น age? ทำให้เป็นทั้ง number และ undefined

//โค้ดที่แก้ไขแล้วคือควรเป็นแบบนี้

type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return (user.age ?? 0) >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result);