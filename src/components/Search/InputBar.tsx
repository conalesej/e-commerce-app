import React from "react";
import './InputBar.scss'
interface IInputBar {
  searchPhrase: string;
  setSearchPhrase: (searchPhrase: string) => void;
}
const InputBar: React.FC<IInputBar> = ({ searchPhrase, setSearchPhrase }) => {
  return (
    <input
      className="input-bar"
      placeholder="Looking for something..."
      value={searchPhrase}
      onChange={(e) => setSearchPhrase(e.target.value)}
    />
  );
};

export default InputBar;
