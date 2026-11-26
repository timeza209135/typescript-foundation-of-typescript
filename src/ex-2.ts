function sumEvenNumbers(numbers: number[]): number {
  let sum = 0;
  for (let number of numbers) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
