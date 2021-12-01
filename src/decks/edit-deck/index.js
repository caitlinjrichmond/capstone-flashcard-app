import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api";
import EditDeckForm from "./EditDeckForm";

function EditDeck() {
  const history = useHistory();
  const deckId = useParams().deckId;
  const [fullDeck, setFullDeck] = useState({name: "loading", cards:[]});
  const allCards = readDeck(deckId);
  const deckName = fullDeck.name;
  
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
            <Link to={`/decks/${deckId}`}>{deckName}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit
          </li>
        </ol>
      </nav>
      <h1>{deckName}</h1>
    { fullDeck.id ? (
        <EditDeckForm fullDeck={fullDeck} history={history} /> 
        ): <p>Loading...</p> }
    </div>
  );
}

export default EditDeck;
