import React from "react";
import { useState, useEffect } from "react";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import CardList from "../card";
import { readDeck } from "../utils/api";
import { deleteDeck } from "../utils/api/index";

function IndividualDeck() {
  const { url } = useRouteMatch();
  const deckId = useParams().deckId;
  const [fullDeck, setFullDeck] = useState({ name: "loading", cards: [] });
  const allCards = readDeck(deckId);
  const history = useHistory();

  useEffect(() => {
    async function loadFullDeck() {
      const deckFromAPI = await allCards;
      setFullDeck(deckFromAPI);
    }
    loadFullDeck();
  }, [deckId, url, allCards]);

  function handleDelete() {
    if (
      window.confirm("Delete this Deck?\n\nYou will not be able to recover it.")
    ) {
      deleteDeck(deckId);
    }
    history.push("/");
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              {" "}
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {fullDeck.name}
          </li>
        </ol>
      </nav>
      <h1>{fullDeck.name}</h1>
      <p>{fullDeck.description}</p>
      <div className="d-flex bd-highlight mb-3">
        <div className="p-1 bd-highlight">
          <Link to={`${url}/edit`}>
            <button type="button" class="btn btn-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
              </svg>{" "}
              Edit
            </button>
          </Link>
        </div>
        <div className="p-1 bd-highlight">
          <Link to={`${url}/study`}>
            <button type="button" class="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-journal-bookmark-fill"
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>{" "}
              Study
            </button>
          </Link>
        </div>
        <div className="p-1 bd-highlight">
          <Link to={`${url}/cards/new`}>
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
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>{" "}
              Add Cards
            </button>
          </Link>
        </div>
        <div className="ml-auto p-1 bd-highlight">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h2>Cards</h2>
      <CardList deckId={fullDeck.id} cardslist={fullDeck.cards} />
    </div>
  );
}

export default IndividualDeck;
