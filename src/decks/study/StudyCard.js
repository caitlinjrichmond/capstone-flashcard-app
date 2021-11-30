import React from "react";
import { useState } from "react";
import StudyButtons from "./StudyButtons";
import ResetDoneBtns from "./ResetDoneBtns";

function StudyCard({ cardList }) {
  const [cardFront, setCardFront] = useState(true);
  const [cardNumber, setCardNumber] = useState(0);

  return (
    <div className="card" style={{ width: "30rem", marginTop: "10px" }}>
      <div className="card-body">
        <h5>
          Card {cardNumber + 1} of {cardList.length}
        </h5>
        <p>
          {cardFront ? cardList[cardNumber].front : cardList[cardNumber].back}
        </p>

        {!cardFront && cardList.length === cardNumber + 1 ? (
          <ResetDoneBtns
            setCardNumber={setCardNumber}
            setCardFront={setCardFront}
          />
        ) : (
          <StudyButtons
            cardFront={cardFront}
            setCardFront={setCardFront}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
          />
        )}
      </div>
    </div>
  );
}

export default StudyCard;
