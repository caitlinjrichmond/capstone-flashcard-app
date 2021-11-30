import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import Forms from "./card-forms/Forms";

function AddCard() {
  const history = useHistory();
  const deckId = useParams().deckId;
  const [deck, setDeck] = useState({ cards: [] });
  const allCards = readDeck(deckId);

  useEffect(() => {
    async function loadDeck() {
      const deckFromAPI = await allCards;
      setDeck(deckFromAPI);
    }
    loadDeck();
  }, [deckId]);

  const handleClick = (event) => {
    history.push(`/decks/${deckId}`);
  };

  function addCardSubmit(newCard) {
    createCard(deckId, newCard);
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <h1>{deck.name}: Add Card</h1>
      <Forms
        handleSubmit={addCardSubmit}
        initialState={deck}
        submitButtonLabel={"Save"}
        cancelButtonLabel={"Done"}
        handleClick={handleClick}
      />
    </div>
  );
}

export default AddCard;
