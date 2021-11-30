import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Decks from "../decks";
import { listDecks } from "../utils/api";

function Home() {
  const [decks, setDecks] = useState([]);
  const allDecks = listDecks();

  useEffect(() => {
    async function loadDecks() {
      const decksFromAPI = await allDecks;
      setDecks(decksFromAPI);
    }
    loadDecks();
  }, []);

  return (
    <div>
      <Link to={"/decks/new"}>
        <button type="button" className="btn btn-secondary">
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
          Create New Deck
        </button>
      </Link>
      <Decks decks={decks} />
    </div>
  );
}

export default Home;
