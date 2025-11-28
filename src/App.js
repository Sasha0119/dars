import { useState } from "react";
import './App.css';
import {Card, Button, UserInfo, Salom} from "./script.jsx";

function App() {
  const [parol, setparol] = useState("******")
    function show() {
    if (parol === "******") {
      setparol("123456")
    } else {
      setparol("******")
    }
  }
  
  const [til, settil] = useState("Salom")
  function lan() {
    if (til === "Salom") {
      settil("Hello")
    } else {
      settil("Salom")
    }
  }

  const [size, setsize] = useState("frontend")
  function togglesize() {
    if (size === "frontend") {
      setsize(size.toUpperCase())
    } else {
      setsize(size.toLowerCase())
    }
  }

  const [divsize, setdivsize] = useState("100px")
  function toggledivsize() {
    setdivsize(divsize === "100px" ? "200px" : "100px")
  }

  const [text, settext] = useState("Yoqish")
  function changeText() {
    if (text === "Yoqish") {
      settext("O'chirish")
    } else {
      settext("Yoqish")
    }
  }

  const [salom, alik] = useState([
    {title: "salomlar", id: 1},
    {title: "salomla", id: 2},
    {title: "saloml", id: 3}
  ]);
  const deletee = (id) => {
    alik((pre) => {
        return pre.filter((event) => {
          return event.id !== id;
        });
      });
    };
  
  const [son, setSon] = useState(0);
  return (
    <div className="App">
      <h1> {son} </h1>
      <button onClick={() => setSon(son + 1)}> + </button>
      <Card />      
      <Salom name="Ali" />
      <Salom name="Vali" />
      <Button />      
      <UserInfo />      
      <p> {parol} </p>
      <button onClick={show}> ko'rish </button>

      <p> {til} </p>
      <button onClick={lan}> o'zgartirish </button>

      <p> {size} </p>
      <button onClick={togglesize}> o'zgarish</button>

      <div style={{padding: divsize}}> {divsize} </div>
      <button onClick={toggledivsize}> o'zgarish</button>

      <p> {text} </p>
      <button onClick={changeText}> o'zgarish</button>

      <div>
        {salom.map((sat) => {
          return(
            <div key={sat.id}>
              <h1>{sat.title}</h1>
              <button onClick={() => deletee(sat.id)}> ochir </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;