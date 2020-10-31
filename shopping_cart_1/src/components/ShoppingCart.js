import React, { Component } from 'react';

class ShoppingCart extends Component {

    renderTableHeader = () => {
        return (
            <tr>
                <th>Quantity</th>
                <th>Item</th>
                <th>Unit Price</th>
                <th>Total Price</th>
                <th></th>
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
                    <td><button className="button_remove_item" onClick={() => this.props.handleRemoveItem(index)}>Remove Item</button></td>
                </tr>
            )
        )
    }
    
    render() {
        const {cartArr} = this.props;
        if(cartArr.length === 0) {
            return (
                <div className="shopping_cart">
                    <p>Your Cart is empty. Let's add some items in the Cart!</p>
                </div>
            )
        }
        return (
            <div className="shopping_cart">
                <table>
                    <thead>{this.renderTableHeader()}</thead>
                    <tbody>{this.renderTableBody(cartArr)}</tbody>
                </table>
            </div>
        )
    }
}

export default ShoppingCart;