import { useState } from "react";
import "./Sort.scss";

interface ISort {
  isAsc: boolean;
  setIsAsc: (isAsc: boolean) => void;
}
const Sort: React.FC<ISort> = ({ isAsc, setIsAsc }) => {
  return (
    <div className="Sort-Toggle">
      <div className="sort-text-prefix">Prices are sorted from {"  "}</div>
      <button className="sort-text" onClick={() => setIsAsc(!isAsc)}>
        {isAsc ? " Lowest to Highest " : " Highest to Lowest "}
      </button>
    </div>
  );
};

export default Sort;
