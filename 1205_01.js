const a = 5;
const b = 12;
const c = 20;

// 1.  a, b 두수의 차이를 구하시오. 양수로 구하시오.
console.log(Math.abs(a-b))

//2. a,b,c 중에 가장 큰 수를  구하시오.
console.log(Math.max(a,b,c))

const price = 1230;

//3. price의 가격을 100원 단위로 올림하시오.
console.log(Math.ceil(price/100) * 100)

//1~15 사이의 랜덤수를 구한다

const random = Math.floor(Math.random() * 15) + 1
console.log(random)

const now = new Date ();
console.log(now)

const year = now.getFullYear()
const month = now.getMonth() + 1
const date = String(now.getDate()) .padStart(2, '0')
const day = now.getDay()
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()

console.log(year, month, date, day, hours, minutes, seconds)
console.log(`${hours}:${minutes}:${seconds}`)

console.log(now.toLocaleTimeString())
console.log(now.toLocaleDateString())

console.log(Date.now())