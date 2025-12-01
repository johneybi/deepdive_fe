const numbers = [30, 25, 12, 3, 8];

// 10이하의 숫자만 출력하시오.

for (const number of numbers) {
  if (number <= 10) {
    console.log(number);
  }
}

const fruits = ['banana', 'lemon', 'orange', 'lime', 'melon'];

// fruits 중 5글자 이하만 출력하시오.

for (const fruit of fruits) {
  if (fruit.length <= 5) {
    console.log(fruit);
  }
}