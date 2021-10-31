import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='home-wrapper'>
            <h1>Welcome to Kirbys Monsters!</h1>
            <div className="home-buttons-wrapper">
                <Link to="/items">See all my items</Link>
                <Link to="/add-item">Add an item</Link>
            </div>
        </div>
    )
}


    <form action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="business" value="EDXAB6Z7ARRTG" />
    <input type="hidden" name="no_recurring" value="1" />
    <input type="hidden" name="item_name" value="To help find new monsters" />
    <input type="hidden" name="currency_code" value="USD" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>