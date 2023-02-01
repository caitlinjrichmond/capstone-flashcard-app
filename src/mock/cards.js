import React from "react";
import { useState, useEffect } from "react";

function Cards({deckId}) {

    const [deckCards, setDeckCards] = useState({});
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        async function loadCards(deckId) {
            const response = await fetch(`http://localhost:8080/decks/${deckId}?_embed=cards`);
            const cardsFromAPI = await response.json();
            setDeckCards(cardsFromAPI);
        }
        loadCards(deckId);
    }, [deckId])

    function clickHandle() {
        setDisplay(display => !display);
    }
    return (
        <div>
            {display ? deckCards.cards.map((card) => <div><p><b>Card {card.id}</b><br /><b>Front</b>: {card.front} <b>Back</b>: {card.back}</p></div>) : null}
            <button onClick={clickHandle}>Click to See Cards</button>
        </div>
    )
}

export default Cards;


























// import React from "react";
// import { useState, useEffect } from "react";

// function Cards({deckId}) {
   
//     const [cards, setCards] = useState({});
//     const [showCards, setShowCards] = useState(false);
    
//     // useEffect(() => {
//     //     async function loadCards(deckId) {
//     //       const response = await fetch(`http://localhost:8080/decks/${deckId}?_embed=cards`);
//     //       const cardsFromApi = await response.json();
//     //       setCards(cardsFromApi);
//     //     }
//     //     loadCards(deckId);
//     //   }, [])

//     useEffect(() => {
//             fetch(`http://localhost:8080/decks/${deckId}?_embed=cards`)
//             .then((response) => response.json())
//             .then(setCards)
//         }, [deckId])
//       console.log(cards.cards);

//       function clickHandler() {
//        setShowCards(showCards => !showCards)
//         // if (showCards) {
//         //     setShowCards(false);
//         // } else if (!showCards) {
//         //     setShowCards(true);
//         // }
//       }

//       return (
//           <div>
//               <div><h1>{cards.name}</h1><br /><p>{cards.description}</p></div>
//               {showCards ? cards.cards.map((card) => <div><p>{card.front}</p><p>{card.back}</p></div>) : null}
              
//               <button onClick={clickHandler}>See Cards</button>
//           </div>
//       )
// }

// export default Cards;