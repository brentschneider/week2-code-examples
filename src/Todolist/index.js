import React, { Component } from 'react';
import TodoItem from './TodoItem';

export class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    addItem(item) {
        this.setState((prevState, props) => {
            return {

            };
        });
    }

    render() {
        const items = [
            'Master CSS',
            'Travel to Easter Island',
            'Learn to fly (also expensive)'
        ];
        const listItems = items.map((item, idx) => {
            return <TodoItem key={idx} text={item} />;
        });

        return (
            <div>
                <h1>Todo List</h1>
                <div>
                    <input />
                    <button>Add Item</button>
                </div>
                {JSON.stringify(this.state.items)}
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default Todolist;
