import { Component } from "react";
import PropTypes from 'prop-types'
import "./counter.css"
import CounterButton from "../counterButton/counterButton";

class Counter extends Component {

    // initial state is stored in constructor
    constructor() {
        super(); // Never Miss
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        // bind 'this' with increment() method in order to use 'this' inside increment() method

        // we can use arrow function if you dont want to bind each methods
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={2} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={50} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <h1 className="count">{this.state.counter}</h1>
                <button name="button" onClick={this.reset}>RESET</button>
            </div>
        )
    }

    increment(by) {
        // use setState instead of directly updating state
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by };
            }
        );
    }

    decrement(by) {
        // use setState instead of directly updating state
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by };
            }
        );
    }

    reset() {
        this.setState(
            { counter: 0 }
        )
    }
}

export default Counter;