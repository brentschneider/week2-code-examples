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

    addItem = () => {
        this.setState((prevState, props) => {
            const items = prevState.items;
            const item = prevState.inputText;
            if (item) {
                items.push(item);
            } else {
                alert('You should enter an item! 😉');
            }

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
                        disabled={this.state.inputText === ''}
                        onClick={this.addItem}
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
