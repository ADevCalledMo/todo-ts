import React, { useRef } from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void; // <-- returns nothing
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  
  return (
    <form className="input" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
      }}>
      <input
        type="input"
        ref={inputRef}
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
