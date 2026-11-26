function processData(data: unknown): string {
  // return data.toUpperCase();
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return "Not a string"
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ เนื่องจาก parameter "data" กำหนด type เป็น unknown ทำให้ TypeScript ไม่อนุญาตให้เรียกใช้เ .toUpperCase() ก่อนตรวจสอบชนิดข้อมูล
