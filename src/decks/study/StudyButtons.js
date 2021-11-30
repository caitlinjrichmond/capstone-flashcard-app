import React from "react";

function StudyButtons({ cardFront, setCardFront, cardNumber, setCardNumber }) {
  
    function nextClick() {
    return cardNumber + 1;
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => setCardFront(!cardFront)}
      >
        Flip
      </button>{" "}
      {!cardFront ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setCardNumber(nextClick);
            setCardFront(true);
          }}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default StudyButtons;
