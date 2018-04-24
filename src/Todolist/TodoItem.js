import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Todolist.css';

class TodoItem extends Component {
    // Another way of defining propTypes
    // static propTypes = {
    //     text: PropTypes.string.isRequired
    // }

    render() {
        return <li className={this.props.complete ? 'strikethrough' : null}>{this.props.text}</li>;
    }
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired
};

TodoItem.defaultProps = {
    text: 'No item :('
};

export default TodoItem;