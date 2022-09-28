import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";
import { Todo } from "./model";

const App: React.FC = () => {
  // todo will be a string
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Need2Do</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
