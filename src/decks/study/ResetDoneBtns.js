import React from "react";
import { Link } from "react-router-dom";

function ResetDoneBtns({ setCardNumber, setCardFront }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          setCardNumber(0);
          setCardFront(true);
        }}
      >
        Restart
      </button>{" "}
      <Link to="/">
        <button type="button" className="btn btn-secondary">
          Done
        </button>
      </Link>
    </div>
  );
}

export default ResetDoneBtns;
