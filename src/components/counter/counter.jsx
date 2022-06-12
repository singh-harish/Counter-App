import { Component } from "react";
import "./counter.css"

class Counter extends Component {

    // initial state is stored in constructor
    constructor(){
        super(); // Never Miss
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        // bind 'this' with increment() method in order to use 'this' inside increment() method

        // we can use arrow function if you dont want to bind each methods
    }

    // Heart and soul, render() method
    render() {
        return (
            <div className="counter">
                <button name="button" onClick={this.increment}>+{this.props.by}</button>
                <h1 className="count">{this.state.counter}</h1>
            </div>
        )
    }

    increment(){
        // use setState instead of directly updating state
        this.setState(
            {counter: this.state.counter+=this.props.by}
        );
    }
}

export default Counter;