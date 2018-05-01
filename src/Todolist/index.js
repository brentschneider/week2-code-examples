import React, { Component } from 'react';
import TodoItem from './TodoItem';

export class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            inputText: ''
        };
    }

    onInputChange = (e) => {
        const inputText = e.target.value;
        this.setState((prevState, props) => {
            return {
                inputText: inputText
            };
        });
    }

    addItem(item) {
        this.setState((prevState, props) => {

            const items = prevState.items;
            items.push(item);

            return {
                items: items,
                inputText: ''
            };
        });
    }

    render() {
        const listItems = this.state.items.map((item, idx) => {
            return <TodoItem key={idx} text={item} />;
        });

        return (
            <div>
                <h1>Todo List</h1>
                <div>
                    <input
                        onChange={this.onInputChange}
                        value={this.state.inputText}
                    />
                    <button
                        onClick={() => this.addItem(this.state.inputText)}
                    >Add Item</button>
                </div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default Todolist;
