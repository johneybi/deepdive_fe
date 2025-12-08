const sentence = "Good morning, Hello"
const hello = sentence.includes("Hello")
console.log(hello)

console.log(sentence.toUpperCase())
console.log(sentence.toLowerCase())

const str = 3;
const doublezero = (String(str).padStart(3, '0'))
console.log(doublezero)

console.log(sentence.repeat(3));


const  nums = [1, 2, 3, 4, 5]
const sum = nums.reduce((a,c) => a+c, 0);
console.log(sum)

const cart = [
    { item : 'apple', price  : 12900},
    { item : 'banana', price : 4900},
    { item : 'onion', price : 5200}
]

const cartTotal = cart.reduce((a,c) => a+c.price, 0)
console.log(`총 가격은 ${cartTotal}원 입니다.`)

const pet = "dog dog dog"
console.log(pet.replace("dog", "cat"))
console.log(pet.replace(/dog/gi, "cat"))

const str2 = "hello world"
console.log(str2.replace("world", "ghost"))
console.log(str2.slice(6, 9))
console.log(str2.slice(6))
console.log(str2.slice(-5))

const phoneNumber = `01012345678`
console.log('*'.repeat(7) + phoneNumber.slice(-4))

const scores = [25,32,40,15]

const totalscore = (scores.reduce((a,c) => a + c, 0))
const average = totalscore / scores.length
console.log(average)

const myScores = {
  math: 90,
  english: 80,
  science: 70,
};

console.log(Object.values(myScores).reduce((a,c) => a + c, 0))

setTimeout(
    (name) => {
        console.log(`Hello, ${name}`)
    },
    2000,
    "Ghost"
)

const timerId = setTimeout(() => {
    console.log("실행되지 않음")
}, 5000);
clearTimeout(timerId)

//setTimeout으로 2초 후에 {~님}, {~초}후에 인사드립니다.
//이름, 시간을 입력받기

function greetAfterDelay(name, seconds) {
  setTimeout(() => {
    console.log(`${name}님, ${seconds}초 후에 인사드립니다.`);
  }, seconds * 1000);
}

greetAfterDelay("딥다이브", 2);

// setInterval(
//     (msg) => {
//         console.log(msg);
//     },
//     2000,
//     "Tick Tock"
// )

// setInterval(() => {
//     const now = new Date();
//     console.log(now.toLocaleTimeString());
// }, 1000)


// const timerId = setInterval(() => console.log("tick"), 1000)

// setTimeout(() =>clearInterval(timerId), 5000)

let count = 0

setInterval(() => {
    count++
    console.log(`${count}초 지났습니다.`)}
    , 1000)
