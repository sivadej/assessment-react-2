import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import NewMenuItem from './NewMenuItem';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // Loads items into state using API calls
  async function loadItems() {
    try {
      let drinksPromise = await SnackOrBoozeApi.getItemsByCategory('drinks');
      let snacksPromise = await SnackOrBoozeApi.getItemsByCategory('snacks');
      let [drinks, snacks] = await Promise.all([drinksPromise, snacksPromise]);
      setDrinks(drinks);
      setSnacks(snacks);
      setIsLoading(false);
    }
    catch (e) {
      console.log(e);
      return <Redirect to="/error" />
    }
  }

  useEffect(() => {
    loadItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home itemCounts={{snacks:snacks.length, drinks:drinks.length}}/>
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/snacks/add">
              <NewMenuItem category="snacks" title="Snack" reloadItems={loadItems} />
            </Route>
            <Route exact path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks/add">
              <NewMenuItem category="drinks" title="Drink" reloadItems={loadItems} />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route exact path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <p>There was a problem loading this page.</p>
            </Route>
            <Redirect to="/"/>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
