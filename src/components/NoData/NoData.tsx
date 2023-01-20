import React from "react";
import "./NoData.scss";

export enum NoDataType {
  TABLE = "TABLE",
  CART = "CART",
}
interface INoData {
  content: string;
  type: NoDataType;
}
export const NoData: React.FC<INoData> = ({ content, type }) => {
  return (
    <div className="No-Data-Content">
      <div className={`content-text-${type}`}>{content}</div>
    </div>
  );
};
