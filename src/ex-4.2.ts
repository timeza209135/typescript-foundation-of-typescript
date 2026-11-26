// function processData(data: unknown): string {
//   return data.toUpperCase();
// }

// console.log(processData("hello")); // ควรได้ "HELLO"
// console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ data เป็น unknow ซึ่งยังไม่ถูกตรวจสอบ type ของข้อมูลทำให้ไม่สามารถเรียกใช้งานได้
//วิธีแก้ไขคือตรวจสอบชนิดข้อมูลก่อน จะได้


function processData(data: unknown): string {
  if (typeof data === "string") {
      return data.toUpperCase();
  } else {
      return "Not a string";
  }
}

console.log(processData("hello"));
console.log(processData(123));
