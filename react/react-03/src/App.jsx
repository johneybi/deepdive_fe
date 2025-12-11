import { useState } from "react";

function App() {
  //1. name 변수 만들어서 문자열 이름 지정하고, p 태그로 출력하기
  const name = "Deep dive";
  
  //2. goodMorning 함수를 만들어서, p태그에 'Good morning' 출력하기
    const goodMorning = (user) => {
    return <p className="text-gray-600">Good morning, {user}!</p>;
  };
  
  //3. 오늘날짜 출력하기, get Today 함수를 만들어서, 날짜를 반홚시켜서 p 태그에 출력하기
  const getToday = () => {
    const today = new Date();
    return <p className="text-sm text-gray-500">{today.toLocaleDateString()}</p>;
  };
  

  const friends = [
    { id: 1, name: "ghost" },
    { id: 2, name: "irangi" },
    { id: 3, name: "camel" },
  ];

  const [count, setCount] = useState(0);
  const [user, setUser] = useState('user');



  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-xl shadow-lg">
      <div className="mb-6 border-b pb-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">JSX 연습</h1>
        <p className="text-xl text-indigo-500">{name}</p>
      </div>

      <div className="space-y-1 mb-4">
        {goodMorning('tomato')}
        {goodMorning('carrot')}
        {goodMorning('eggplant')}
      </div>

      {getToday()}

      <div className="mt-6 pt-4 border-t">
        <h2 className="text-2xl font-semibold text-gray-700">My Friends</h2>
        <ul className="mt-3 list-disc list-inside space-y-2">
          {friends.map((friend) => (
            <li key={friend.id} className="text-gray-600 text-lg">
              {friend.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 pt-4 border-t">
       <h2 className="text-2xl font-semibold text-gray-700">Count : {count}</h2> 
       <button className="mt-3 px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onClick={() => setCount(count + 1)}>+</button>
       <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors" onClick={() => setCount(count - 1)}>-</button>      
      </div>
      <div className="mt-6 pt-4 border-t">
        <h2 className="text-2xl font-semibold text-gray-700">User : {user}</h2>
        <button className="mt-3 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors" onClick={() => setUser('tomato')}>tomato</button>

      </div>
    </div>
  );
}

export default App;
