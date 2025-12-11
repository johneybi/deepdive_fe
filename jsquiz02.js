// 01. 문자열 반복 출력
function mission1(str, n) {
  return str.repeat(n);
}
console.log(mission1("Hello", 3)); // Hello가 3번찍히도록

// 02. 최소값 찾기
const numbers = [52, 2, 12, 10, 1, 7];
function mission2(arr) {
  return Math.min(...arr);
}
console.log(mission2(numbers)); // 최소값 1을 출력하시오

// 03. 날짜 포맷(점표기)
function mission3() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0'); // 화살표 함수
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`;
}
console.log(mission3()); // 2025.12.08 로 출력하시오

// 04. 배열 포함여부
const fruits = ["apple", "banana", "mango"];
function mission4(arr, target) {
  return arr.includes(target);
}
console.log(mission4(fruits, "banana")); // true
console.log(mission4(fruits, "orange")); // false

// 05. 주어진 문자의 개수 출력
function mission5(str, char) {
  return [...str].filter(c => c === char).length;
}
console.log(mission5("banana", "a")); // 3 -> a가 banana에 몇개 있는지 출력