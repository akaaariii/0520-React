import React, { Component } from 'react';

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

class ShoppingForm extends Component {

    state = {
        error : undefined
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
        const err = this.props.handleSubmitForm(quantity, item, price);
        this.setState(() => {
            return {error : err}
        })
    }

    render() {
        const {error} = this.state;
        return (
            <div className="shopping_form">
                {error && <p className="error">{error}</p>}
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
            </div>
        )
    }
}

export default ShoppingForm;