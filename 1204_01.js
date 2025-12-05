const obj = {
    name: "ghost",
    age: 500,
    sayHello: function () {
        console.log(`Hello, ${this.name}`)
    },

    sayGoodBye: () => {
        console.log(`Good Bye, ${this.name}`)
    },

    printAge() {
        console.log(`${this.name}의 나이는 ${this.age}입니다.`)
    }
}

obj.sayHello()
obj.sayGoodBye(); //undefined