import React, { Component } from 'react'
import axios from 'axios';

export default class AddItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toyInput: "",
            priceInput: "",
            loading: false,
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
 
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            loading: true,
            error: false
        })

        fetch("http://127.0.0.1:5000/item/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: this.state.toyInput,
                price: parseFloat(this.state.priceInput)
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.props.history.push("/items")
            }
        })
        .catch(error => {
            console.log("Error adding item ", error)

            this.setState({
                loading: false,
                error: true
            })
        })
    } 

    render() {
        return (
            <div className='add-item-wrapper'>
                <h2>Add Item</h2>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="toy"
                        name="toyInput" 
                        value={this.state.toyInput}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text" 
                        placeholder="price"
                        name="priceInput" 
                        value={this.state.priceInput}
                        onChange={this.handleChange}
                    />

                    <button type="submit" disabled={this.state.loading}>Add Item</button>
                </form>

                {this.state.loading ? <div className="loading">Submitting...</div> : null}

                {this.state.error ? <div className="error">An error occured... Please try again later.</div> : null}
            </div>
        )
    }
}