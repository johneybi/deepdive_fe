const price = [1000, 2000, 3000]

//이 가격을 2배로 모두 인상해서 새로운 가격표를 만들어야 한다.
//map

const newPrice = price.map((price) => price * 2)
console.log(newPrice)

const ages = [15,22,19,30,12];
// 20세 이상인 성인만 필터링, filter
const adult = ages.filter((age) => age >= 20)
console.log(adult)

const str = ["a", "b", "c", "d", "e", "c"]
console.log(str.indexOf("c"))
console.log(str.lastIndexOf("c"))
console.log(str.indexOf("f"))
console.log(str.includes("c"))
console.log(str.includes("f"))

str.reverse()
console.log(str)

str.sort()
console.log(str)

const numbers = [1, 5, 3, 8, 2, 13, 32]
numbers.sort((a, b) => a - b)
console.log(numbers)

numbers.sort((a, b) => b - a)
console.log(numbers)

const myfruits = "apple,banana,mango"
const myArray = myfruits.split(",")
console.log(myArray)

console.log(myArray.join("-"))