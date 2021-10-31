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


<form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="business" value="EDXAB6Z7ARRTG" />
<input type="hidden" name="no_recurring" value="1" />
<input type="hidden" name="item_name" value="To help find new monsters" />
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>