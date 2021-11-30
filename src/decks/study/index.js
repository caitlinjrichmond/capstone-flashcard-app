import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import StudyCard from "./StudyCard";
import NeedCards from "./NeedCards";
import { readDeck } from "../../utils/api";

function Study() {
  const deckId = useParams().deckId;
  const [fullDeck, setFullDeck] = useState({ name: "loading", cards: [] });
  const allCards = readDeck(deckId);
  const cardList = fullDeck.cards;

  useEffect(() => {
    async function loadFullDeck() {
      const deckFromAPI = await allCards;
      setFullDeck(deckFromAPI);
    }
    loadFullDeck();
  }, [deckId]);

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
            <Link to={`/decks/${fullDeck.id}`}>{fullDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h1>Study: {fullDeck.name}</h1>
      {cardList.length <= 2 ? (
        <NeedCards cardList={fullDeck.cards} />
      ) : (
        <StudyCard cardList={fullDeck.cards} />
      )}
    </div>
  );
}

export default Study;
