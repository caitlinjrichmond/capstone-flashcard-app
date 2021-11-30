import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";

function Decks({ decks }) {
  const history = useHistory();

  function handleDelete(id) {
    if (
      window.confirm("Delete this Deck?\n\nYou will not be able to recover it.")
    ) {
      deleteDeck(id);
    }
    history.go(0);
  }

  return (
    <div>
      {decks.map((deck, index) => (
        <li key={index} style={{ listStyleType: "none" }}>
          <div className="card" style={{ width: "30rem", marginTop: "10px" }}>
            <div className="card-body">
              <div className="d-flex bd-highlight">
                <div className="bd-highlight">
                  <h4>{deck.name}</h4>
                </div>
                <div className="ml-auto bd-highlight">
                  <p style={{ fontSize: "12px" }}>{deck.cards.length} cards</p>
                  {/* {deck.cards.length > 1 ? "Cards" : "Card"} */}
                </div>
              </div>
              <p>{deck.description}</p>
              <div className="d-flex bd-highlight">
                <div className="p-1 bd-highlight">
                  <Link to={`/decks/${deck.id}`}>
                    <button type="button" className="btn btn-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>{" "}
                      View
                    </button>
                  </Link>
                </div>
                <div className="p-1 bd-highlight">
                  <Link to={`/decks/${deck.id}/study`}>
                    <button type="button" className="btn btn-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-journal-bookmark-fill"
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
                <div class="ml-auto p-1 bd-highlight">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(deck.id);
                    }}
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
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Decks;
