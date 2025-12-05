const a = 4.7;

console.log(Math.round(a))
console.log(Math.floor(a))
console.log(Math.ceil(4.1))

console.log(Math.max(1, 7, 2))
console.log(Math.min(1, 7, 2))

const talls = [ 178, 152, 143, 190]

console.log(`가장 큰 키는 ${Math.max(...talls)}입니다.`)

const randomNumber = Math.floor(Math.random()*10+1)
console.log(`Lucky Number is : `, randomNumber)

console.log(Math.pow(2, 3))

console.log(Math.abs(-5))
console.log(Math.abs(5))