import { useState } from 'react';
import Welcome from "./Welcome";
import Card from "./Card";
import List from "./List";

function App() {
  const [text, setText] = useState("Hello");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      
      <h1 className="text-5xl font-bold text-indigo-400 mb-8">Hello world</h1>

      <div className="mb-8 space-y-4">
        <Welcome 
          name="react" 
          msg="Hello"
          className="bg-gray-800 p-4 rounded-lg shadow-md text-lg w-80 text-center"
        />
        <Welcome 
          name="Javascript" 
          msg="World"
          className="bg-gray-800 p-4 rounded-lg shadow-md text-lg w-80 text-center"
        />
      </div>

      <div className="">
        <Card title="공지사항">
          <p>오늘은 금요일입니다. 화이팅!</p>
          <strong>Friday</strong>
        </Card>
      </div>

      <List>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
      </List>



      <div className="w-full max-w-sm">
        <input 
          type="text" 
          value={text} 
          onChange={handleChange} 
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white" 
        />
        <p className="mt-4 text-center text-gray-400">
          입력값 : <span className="font-semibold text-indigo-300">{text}</span>
        </p>
      </div>
      
    </div>
  );
}

export default App;