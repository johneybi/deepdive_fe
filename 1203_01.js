const user = {
    name : 'Dieter',
    age : 500
}

console.log("name" in user)
console.log("mbti" in user)

for (const key in user) {
    console.log(`${key}`)
}

console.log(user.hasOwnProperty("name"))



const keys = Object.keys(user)
console.log(keys)

const values = Object.values(user)
console.log(values)

const entries = Object.entries(user)
console.log(entries)

const target = {a: 1, b: 2}
const source = {b: 3, c:4, d: 5}

const total = {...target, ...source}
console.log(total)

const totalAsign = Object.assign(target, source)
console.log(totalAsign)

const person = {name: 'Ghost', age: 20, mbti: null}
//person의 key 개수를 출력하시오

console.log(Object.keys(person).length)

//person에 잆는 값중에, null이 있는지 확인하시오

const hasNull = Object.values(person).includes(null)
console.log(hasNull)

const tasks = [
    {id: 1, text: "walk"},
    {id: 2, text: "running"},
]

const newTask = {id:3, text:"programming"}

const finalTasks = [...tasks, newTask]
console.log(finalTasks)