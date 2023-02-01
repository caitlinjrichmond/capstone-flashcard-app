import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Cards from "./mock/cards";
import Layout from "./Layout";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
//   const [decks, setDecks] = useState([]);

//   useEffect(() => {
//     async function loadDecks() {
//       const response = await fetch("http://localhost:8080/decks");
//       const decksFromAPI = await response.json();
//       setDecks(decksFromAPI);
//     }
//     loadDecks();
//   }, []);

//   console.log(decks);

  return (
//     <div className="app-routes">
//       {decks ? decks.map((deck) => (
//         <div>
//           <h1>Deck {deck.id}</h1>
//           <br />
//           <p>
//             <u>Title</u>: {deck.name}
//           </p>
//           <p>
//             <u>Descripton</u>: {deck.description}
//           </p>
//           <Cards deckId={deck.id} />
//         </div>
//       )) : <p>Loading...</p>}

//     </div> 
    <div>
      <Layout />
    </div>

  );
}

export default App;
