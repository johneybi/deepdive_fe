const a = 'hello'
const b = 3;
const c = b > 5;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(5));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("  "));
console.log(Boolean(''));

//변수 animals에 동물 5가지를 넣은 배열을 만들어 보세요

const animals = ["dog", "cat", "rabbit", "hamster", "tiger"];
console.log(animals);

console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[4]);

animals.pop()
console.log(animals);

animals.pop()
console.log(animals);

animals.pop()
console.log(animals);

animals.pop()
console.log(animals);

animals.push("rabbit")
console.log(animals)

animals.unshift("cat")
console.log(animals)

animals.push("snake", "kagaroo")
console.log(animals)


// for문으로 1 + 10 더한 값을 출력
let total = 0;

for(let i=1; i <=10; i++) {
    total += i;
}

console.log(total)

for (const  animal of animals) {
    console.log(animal);
}

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

animals.forEach((animal, index) => {
  console.log(animal);
  console.log(`${index+1}. ${animal} `)
});