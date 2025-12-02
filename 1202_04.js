const users = [
  { name: "David", point: 50 },
  { name: "Juliet", point: 150 },
  { name: "Mike", point: 250 },  
];

//vip회원에게 특별이벤트
//vip회원기준은 포인트가 100점 이상인 회원만

const vips = users.filter((user) => user.point >= 100)
console.log(vips)

const newVips = vips.map((vip)=>({...vip, point:vip.point *2}))
console.log("newVips : ", newVips)


const obj1 = { name: "ghost", age: 500}
const obj2 = { mbti: "INFJ", age: 3000}
const friends = {...obj1, ...obj2}
console.log("friends : ", friends)

const newFriend = { ...friends, age: 1000}
console.log(newFriend)