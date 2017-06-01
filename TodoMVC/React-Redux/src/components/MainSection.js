import React, { Component } from 'react';
import { classNames } from '../utils';
import TodoItem from './TodoItem';
import Footer from './Footer';
import { ALL, ACTIVE, COMPLETED } from '../constants/TodoFilters';

const TODO_FILTERS = {
    [ALL]: () => true,
    [ACTIVE]: (todo) => !todo.completed,
    [COMPLETED]: (todo) => todo.completed
};

class MainSection extends Component {

    state = {
        filter: ALL
    };

    handleClearCompleted = () => {
        this.props.actions.clearCompleted();
    };

    handleShow = filter => {
        this.setState({filter});
    };

    renderToggleAll(completedCount) {
        let { todos, actions } = this.props;
        if (todos.length > 0) {
            return (
                <input className="toggle-all"
                       type="checkbox"
                       checked={completedCount === todos.length}
                       onChange={actions.completeAll}
                    />
            );
        }
    }

    renderFooter(completedCount) {
        let { todos } = this.props;
        let { filter } = this.state;
        let activeCount = todos.length - completedCount;

        if (todos.length) {
            return (
                <Footer completedCount={completedCount}
                        activeCount={activeCount}
                        filter={filter}
                        count={todos.length}
                        onClearCompleted={this.handleClearCompleted}
                        onShow={this.handleShow}
                    />
            );
        }
    }

    render() {
        let { todos, actions } = this.props;
        let { filter } = this.state;

        let filteredTodos = todos.filter(TODO_FILTERS[filter]);
        let completedCount = todos.reduce((count, todo) => (
            todo.completed ? count + 1 : count
        ), 0);

        return (
            <section className="main">
                {this.renderToggleAll(completedCount)}
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                            <TodoItem key={todo.id} todo={todo} {...actions} />
                        )
                    )}
                </ul>
                {this.renderFooter(completedCount)}
            </section>
        );
    }
}

export default MainSection;
