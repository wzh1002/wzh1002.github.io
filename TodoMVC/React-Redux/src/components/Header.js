import React, { Component, PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleSave = text => {
        text.length !== 0 && this.props.addTodo(text);
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput newTodo
                               onSave={this.handleSave}
                               placeholder="What needs to be done"
                    />
            </header>
        );
    }
}

export default Header;
