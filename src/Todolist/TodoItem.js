import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Todolist.css';

class TodoItem extends Component {
    // Another way of defining propTypes
    // static propTypes = {
    //     text: PropTypes.string.isRequired
    // }

    render() {
        return <li>{this.props.text}</li>;
    }
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired
};

export default TodoItem;