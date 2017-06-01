import React, { Component, PropTypes } from 'react';
import { classNames } from '../utils';
import { ESCAPE_KEY, ENTER_KEY } from '../constants/Keys';

class TodoTextInput extends Component {

    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
        editing: PropTypes.bool,
        newTodo: PropTypes.bool
    }

    state = {
        text: this.props.text ||  ''
    }

    handleKeyDown = e => {
        if (e.which === ENTER_KEY) {
            const text = e.target.value.trim();
            this.props.onSave(text);
            this.props.newTodo && this.setState({text: ''});
        }
    }

    handleChange = e => {
        this.setState({text: e.target.value});
    }

    handleBlur = e => {
        !this.props.newTodo && this.props.onSave(e.target.value);
    }

    render() {
        return (
            <input className={
                classNames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                })}
                type="text"
                placeholder={this.props.placeholder}
                autoFocus={true}
                value={this.state.text}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                onKeyDown={this.handleKeyDown}
            />
        );
    }
}

export default TodoTextInput;
