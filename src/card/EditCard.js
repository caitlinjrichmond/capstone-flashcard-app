import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../utils/api";
import Forms from "../card/card-forms/Forms";

function EditCard() {
  const history = useHistory();
  const deckId = useParams().deckId;
  const cardId = useParams().cardId;
  const [fullDeck, setFullDeck] = useState({cards:[]});
  const [card, setCard] = useState({front:"", back:""});
  const allCards = readDeck(deckId);

  useEffect(() => {
    async function loadFullDeck() {
      const deckFromAPI = await allCards;
      setFullDeck(deckFromAPI);
    }
    loadFullDeck();
  }, [deckId]);

  useEffect(() => {
    async function loadCard() {
      const cardFromAPI = await readCard(cardId);
      setCard(cardFromAPI);
    }
    loadCard();
  }, [cardId]);

  const handleClick = (event) => {
    history.push(`/decks/${deckId}`);
  };

  function handleEditSubmit(updatedCard) {
    updateCard(updatedCard);
    history.push(`/decks/${deckId}`);
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
            <Link to={`/decks/${deckId}`}>{fullDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h1>Edit Card</h1>
     {card.id ? (
     <Forms
        initialState={card}
        handleSubmit={handleEditSubmit}
        handleClick={handleClick}
        submitButtonLabel={"Submit"}
        cancelButtonLabel={"Cancel"}
      /> 
     ): <p>Loading...</p>}
    </div>
  );
}

export default EditCard;
