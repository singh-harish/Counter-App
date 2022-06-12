import { Component } from "react";
import "./counter.css"

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <button name="button" onClick={this.increment}>+1</button>
                <button name="button">+2</button>
                <button name="button">+5</button>
                <button name="button">+10</button>
                <button name="button">+50</button>
                <button name="button">+100</button>
                <h1 className="count">0</h1>
            </div>
        )
    }

    increment(){
        console.log("incremented")
    }
}

export default Counter;