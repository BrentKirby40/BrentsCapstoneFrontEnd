import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import axios from 'axios';


import Nav from "./nav";
import Home from "./pages/home";
import Items from "./pages/items";
import AddItem from "./pages/add-item";
import About from "./pages/about";

export default class App extends Component {
constructor() {
  super();

  this.getPortfolioItems = this.getPortfolioItems.bind(this);
}
  getPortfolioItems() {
    axios
      .get("https://brentkirby.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  } 

  render() {
    this.getPortfolioItems();
    return (
      <div className='app'>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/items" component={Items} />
          <Route path="/add-item" component={AddItem} />
          <Route path="/about" Component={About} />
     
        </Switch>
      </div>
    );
  }
}


