import React, { Component } from 'react';
import Header from './components/Header'
import ShoppingForm from './components/ShoppingForm'
import ShoppingCart from './components/ShoppingCart';


class App extends Component {

    state = {
        cart : []
    }

    handleSubmitForm = (quantity, item, price) => {
        if(!quantity) {
            return 'You should enter the quantity'
        }
        this.setState((prevState) => {
            return {cart : prevState.cart.concat({quantity : quantity, item : item, price : price})}
        })
    }

    handleRemoveAll = () => {
        this.setState(() => {
            return {cart : []}
        })
    }

    handleRemoveItem = (index) => {
        console.log(index)
        this.setState((prevState) => {
            return {cart : prevState.cart.filter((row, i) => i !== index)}
        })
    }

    render() {
        const {cart} = this.state;
        return (
            <div className="container">
                <Header />
                <main>
                    <ShoppingForm handleSubmitForm = {this.handleSubmitForm}
                                  handleRemoveAll = {this.handleRemoveAll} />
                    <ShoppingCart cartArr = {cart}
                                  handleRemoveItem = {this.handleRemoveItem} />
                </main>
            </div>
        )
    }
}

export default App;
