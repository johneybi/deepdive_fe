import "./App.css";
import logo from "./assets/react.svg";
import { useState } from "react";

function App() {
  const isLoggedIn = false;
  const name = "Ghost";
  const isActive = true;
  const fruits = [`apple`, `banana`, `orange`];

  const style = {
    color: "blue",
    fontSize: "24px",
  };
  const count = 5;
  const user = { name: "Coding-ghost", isLoggedIn: true };

  const handleClick = () => {
    alert("Click!");
  };

  // let isDarkMode = true;
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <h1 className="title">Hello</h1>
      <p style={style}>Good morning, 변수로 스타일 지정</p>
      <div style={{ color: "olive", backgroundColor: "gold" }}>
        Inline Style
      </div>

      <p>{count + 1}</p>
      <p>{user.isLoggedIn ? `Welcome ${user.name}` : "Please, Sign In"}</p>

      {isLoggedIn ? <button>Log-out</button> : <button>Log-in</button>}
      {isLoggedIn && <p>Welcome, {name}!</p>}

      <hr />
      {/* 삼항 연산자 사용 */}
      <button className={isActive ? "btn active" : "btn"}>Button 1</button>
      {/* 템플릿 리터럴 사용(추천) */}
      <button className={`btn ${isActive ? "active" : ""}`}>Button 2</button>
      <hr />

      {
        <ul>
          {fruits.map((fruit, index) => (<li key={index}>{fruit}</li>
          ))}
        </ul>
      }

      <button onClick={handleClick}>Click Me</button>
      <img src="/vite.svg" alt="Vite Logo" />
      <img src={logo} alt="React Logo" />
      
      <div className={`toggle-box ${isDarkMode ? "dark" : "light"}`}>
        {isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
      </div>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>모드 전환하기</button>

    </>
  );
}

export default App;
