const numbers = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]

//01. filter를 사용하여 짝수만 골라서 evenNumbers 변수에 담아 출력합니다.

const evenNumbers = numbers.filter((number) => number % 2 === 0)
console.log(evenNumbers)


//02. evenNumbers의 숫자들을  모두 2제곱수로 만들어서 doubleNumbers 변수에 담아 출력합니다.

const doubleNumbers = evenNumbers.map((number) => number ** 2)
console.log(doubleNumbers)


const arr = [13, 5, 22, 10, 5, 15, 82];
//03. arr 인덱스 3번째부터 4번째까지만 추출하기 -> [10, 5]

const slicedArr = arr.slice(3,5)
console.log(slicedArr)

//04. arr에서 짝수의 개수를 구하시오 (filter, length 사용)

const evenLength = arr.filter((number) => number % 2 === 0).length
console.log(evenLength)

//05. arr에서 5의 배수의 개수를 구하시오.

const fiveLength = arr.filter((number) => number % 5 === 0).length
console.log(fiveLength)