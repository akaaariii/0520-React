import React, { Component } from 'react';
import './App.css';

const products = [
    {item: 'Camera', price: 500},
    {item: 'Shoes', price: 150},
    {item: 'Hand Bag', price: 700},
    {item: 'Smart Phone', price: 1200},
    {item: 'Sweater', price: 120},
    {item: 'Watch', price: 600},
    {item: 'Headphones', price: 300},
    {item: 'Book', price: 20},
    {item: 'Ring', price: 3000}
]

class App extends Component {

    state = {
        cart : []
    }

    renderSelectOption = () => {
        const options = products.map((product, index) => <option key={index}>{product.item} - ${product.price}</option>)
        return <select name="selected">{options}</select>
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        const quantity = e.target.elements.quantity.value;
        const item = (e.target.elements.selected.value).split(' - ')[0];
        const price = (e.target.elements.selected.value).split(' - ')[1].substring(1);
        this.setState((prevState) => {
            return {cart : prevState.cart.concat({quantity : quantity, item : item, price : price})}
        })
    }

    renderTableHeader = () => {
        return (
            <tr>
                <th>Quantity</th>
                <th>Item</th>
                <th>Unit Price</th>
                <th>Total Price</th>
            </tr>
        )
    }

    renderTableBody = (cartArr) => {
        return (
            cartArr.map((cart, index) => 
                <tr key={index}>
                    <td>{cart.quantity}</td>
                    <td>{cart.item}</td>
                    <td>${cart.price}</td>
                    <td>${cart.quantity * cart.price}</td>
                </tr>
            )
        )
    }

    renderCart = (cartArr) => {
        return (
            <table>
                <thead>{this.renderTableHeader()}</thead>
                <tbody>{this.renderTableBody(cartArr)}</tbody>
            </table>
        )
    }


    render() {
        const {cart} = this.state;
        console.log(cart)
        return (
            <div className="container">
                <header>
                    <h1>Shopping Cart</h1>
                </header>
                <main>
                    <form onSubmit={this.handleSubmitForm}>
                        <div>
                            <label>Selected Items:</label>
                            {products.length > 0 && this.renderSelectOption()}
                        </div>
                        <div>
                            <label>Quantity:</label>
                            <input type="number" name="quantity" placeholder="Enter the quantity"></input>
                        </div>
                        <button type="submit" className="addBtn" onClick={this.addItems}>Add to Cart</button>
                    </form>
                    <div>
                        {cart.length > 0 ? this.renderCart(cart) : <p>Your Cart is empty. Let's add some items in the Cart!</p>}
                    </div>
                </main>
            </div>
        )
    }
}

export default App;
