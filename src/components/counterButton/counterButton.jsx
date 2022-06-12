import { Component } from "react";
import PropTypes from 'prop-types'
import "./counterButton.css"

class CounterButton extends Component {

    // initial state is stored in constructor
    constructor() {
        super(); // Never Miss
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        // bind 'this' with increment() method in order to use 'this' inside increment() method

        // we can use arrow function if you dont want to bind each methods
    }

    // Heart and soul, render() method
    render() {
        return (
            <div className="counterButton">
                <button name="button" onClick={this.increment}>+{this.props.by}</button>
                <button name="button" onClick={this.decrement}>-{this.props.by}</button>
                {/* <h1 className="count">{this.state.counter}</h1> */}
            </div>
        )
    }

    increment() {
        // use setState instead of directly updating state
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + this.props.by}
            }
        );
        this.props.incrementMethod(this.props.by);
    }

    decrement() {
        // use setState instead of directly updating state
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - this.props.by}
            }
        );
        this.props.decrementMethod(this.props.by);
    }
}

CounterButton.defaultProps = {
    by: 1
}
CounterButton.propTypes = {
    by: PropTypes.number
}

export default CounterButton;