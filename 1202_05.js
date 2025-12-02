const numbers = [5, 2, 11, 1, 25, 9, 32, 10];
// 1. numbers 배열에서 짝수만 추출하시오
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// 2. numbers 배열에서 각 요소를 제곱한 새 배열을 만드시오
const squaredNumbers = numbers.map((number) => number ** 2);
console.log(squaredNumbers);

// 3. numbers 배열을 내림차순으로 정렬하시오
const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers);

// 4. numbers 에 숫자 9가 포함되었는지 확인하시오
const includeNumbers = numbers.includes(9);
console.log(includeNumbers);

// 5. numbers 배열에서 10보다 작은 값만 2배로 만든 새 배열을 만드시오
const doubledNumbers = numbers
  .filter((number) => number < 10)
  .map((number) => number * 2);
console.log(doubledNumbers);



// 6. 친구이름중에 'Camel'이 있는지 확인하는 함수 만들기

const friends = ["Irangi", "Camel", "Shoopa"];
function findMyFriend(names) {
    return names.includes("Camel")
}
console.log(findMyFriend(friends));





// 1. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users = [
  { name: "Ghost", age: 20 },
  { name: "Irangi", age: 22 },
  { name: "Camel", age: 19 },
];

const usernames = users
    .map((user) => user.name);

console.log(usernames)


//2. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.
const user = { name: "Ghost", age: 20 };

const ageOlder = {...user, age:30}

console.log(ageOlder)


const person = { name: "Ghost", age: 500 };
// 3. person 객체에 동적으로 key와 value를 추가하세요.
// (key: hobby, value: soccer)
person.hobby = "Soccer"
// 4. person의 name값을 출력하세요
console.log(person.name)

// 5. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merge = {...obj1, ...obj2}

console.log(merge)



/* 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성하세요.
*/

function solution(my_string) {
    return my_string
        .split('')
        .filter(alphabet => !'aeiou'.includes(alphabet))
        .join('');
}
console.log(solution('beautiful')); // 'btfl'