import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../home";
import IndividualDeck from "../decks/IndividualDeck";
import Study from "../decks/study";
import AddCard from "../card/AddCard";
import EditDeck from "../decks/edit-deck";
import CreateDeck from "../decks/CreateDeck";
import EditCard from "../card/EditCard";
import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={`/decks/new`}>
            <CreateDeck />
          </Route>
          <Route exact path={`/decks/:deckId`}>
            <IndividualDeck />
          </Route>
          <Route exact path={`/decks/:deckId/study`}>
            <Study />
          </Route>
          <Route exact path={`/decks/:deckId/edit`}>
            <EditDeck />
          </Route>
          <Route exact path={`/decks/:deckId/cards/new`}>
            <AddCard />
          </Route>
          <Route exact path={`/decks/:deckId/cards/:cardId/edit`}>
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
