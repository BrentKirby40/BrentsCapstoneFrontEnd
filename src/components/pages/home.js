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

