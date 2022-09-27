import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";




const App: React.FC = () => {
  // todo will be a string 
  const [todo, setTodo] = useState<string>("");

  console.log(todo)

  return (
    <div className="App">
      <span className="heading">Need2Do</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
