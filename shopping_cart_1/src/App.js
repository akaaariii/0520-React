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

    render() {
        const {cart} = this.state;
        return (
            <div className="container">
                <Header />
                <main>
                    <ShoppingForm handleSubmitForm = {this.handleSubmitForm} />
                    <ShoppingCart cartArr = {cart}/>
                </main>
            </div>
        )
    }
}

export default App;
