import React from 'react'
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className='about-wrapper'>
            
            <div className="home-buttons-wrapper">
                <Link to="/items">See all my items</Link>
                <Link to="/add-item">Add an item</Link>
                <Link to="/home">Go back to the home page</Link>
            </div>

            <div className="about-paragraph">
                <h1>Welcome to Kirbys Monsters, after having a stroke i figured out i could scuplt clay. what you are seeing on this page are my monsters.</h1>
            </div>
        </div>
    )
}