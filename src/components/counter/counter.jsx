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
        // bind 'this' with increment() method in order to use 'this' inside increment() method

        // we can use arrow function if you dont want to bind each methods
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} />
                <CounterButton by={2} incrementMethod={this.increment} />
                <CounterButton by={5} incrementMethod={this.increment} />
                <CounterButton by={10} incrementMethod={this.increment} />
                <CounterButton by={50} incrementMethod={this.increment} />
                <CounterButton by={100} incrementMethod={this.increment} />
                <h1 className="count">{this.state.counter}</h1>
            </div>
        )
    }

    increment(by) {
        // use setState instead of directly updating state
        this.setState(
            (prevState) => {
            return {counter: prevState.counter + by};
            }
        );
    }

}

export default Counter;