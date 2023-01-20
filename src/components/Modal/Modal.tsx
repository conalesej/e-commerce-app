import React from "react";
import "./Modal.scss";
interface IModal {
  isShowing: boolean;
  setIsShowing: (isShowing: boolean) => void;
}
export const Modal: React.FC<IModal> = ({ isShowing, setIsShowing }) => {
  const showHideClassName = isShowing
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className="modal">
      <div className="modal-main">
        <div className="modal-main-item-1">
          Thank you for purchasing from our Store!
        </div>
        <div className="modal-main-item-2">
          <button
            type="button"
            className="modal-button"
            onClick={() => {
              setIsShowing(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
