import React from "react";
import { Link, useParams } from "react-router-dom";

function NeedCards({ cardList }) {
  const deckId = useParams().deckId;

  return (
    <div>
      <h3>Not enough cards.</h3>
      <p>
        You need at least 3 cards to study. This deck contains {cardList.length}{" "}
        card(s).
      </p>
      <Link to={`/decks/${deckId}/cards/new`}>
        <button type="button" class="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>{" "}
          Add Cards
        </button>
      </Link>
    </div>
  );
}

export default NeedCards;
