import React from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void; // <-- returns nothing
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="input"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="Enter A Task"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
