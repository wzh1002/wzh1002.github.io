/**
 * Created by 78462 on 2017/4/23.
 */
import React, { Component } from 'react';
import config from './config';
import Item from './Item';
import Footer from './Footer';
import { Router } from '../../dist/director/build/director';

class App extends Component {
    constructor() {
        super();
        this.state = {
            nowShowing: config.ALL,
            editing: null,
            newTodo: ''
        };
    }

    componentDidMount() {
        let setState = this.setState,
            router = Router({
                '/': setState.bind(this, {nowShowing: config.ALL}),
                '/active': setState.bind(this, {nowShowing: config.ACTIVE}),
                '/completed': setState.bind(this, {nowShowing: config.COMPLETED})
            });
        router.init('/');
    }

    handleChange(event) {
        this.setState({
            newTodo: event.target.value
        });
    }

    handleNewTodoKeyDown(event) {
        if (event.keyCode !== config.ENTER_KEY) {
            return;
        }

        event.preventDefault();

        var val = this.state.newTodo.trim();

        if (val) {
            this.props.model.addTodo(val);
            this.setState({newTodo: ''});
        }
    }

    toggleAll(event) {
        let target = event.target;
        this.props.model.toggleAll(target.checked);
    }

    toggle(todoToToggle) {
        this.props.model.toggle(todoToToggle);
    }

    destroy(todo) {
        this.props.model.destroy(todo);
    }

    edit(todo) {
        this.setState({
            editing: todo.id
        });
    }

    save(todoToSave, text) {
        this.props.model.save(todoToSave, text);
        this.setState({
            editing: null
        });
    }

    cancel() {
        this.setState({
            editing: null
        });
    }

    clearCompleted() {
        this.props.model.clearCompleted();
    }

    render() {
        let footer, main;
        let todos = this.props.model.todos;

        let showTodos = todos.filter((todo) =>{
            switch (this.state.nowShowing) {
                case config.ACTIVE:
                    return !todo.completed;
                case config.COMPLETED:
                    return todo.completed;
                default:
                    return true;
            }
        });

        let todoItems = showTodos.map(function(todo){
            return (
                <Item
                    key={todo.id}
                    todo={todo}
                    onToggle={this.toggle.bind(this, todo)}
                    onDestroy={this.destroy.bind(this, todo)}
                    onEdit={this.edit.bind(this, todo)}
                    editing={this.state.editing === todo.id}
                    onSave={this.save.bind(this, todo)}
                    onCancel={this.cancel.bind(this)}
                    />
            );
        }, this);

        let activeTodoCount = todos.reduce(function(accum, todo) {
            return todo.completed ? accum : accum + 1;
        }, 0);

        let completedCount = todos.length - activeTodoCount;

        if (activeTodoCount || completedCount) {
            footer =
                <Footer
                    count={activeTodoCount}
                    completedCount={completedCount}
                    nowShowing={this.state.nowShowing}
                    onClearCompleted={this.clearCompleted.bind(this)}
                    />;

            main = (
                <section className="main">
                    <input
                        className="toggle-all"
                        type="checkbox"
                        onChange={this.toggleAll.bind(this)}
                        checked={activeTodoCount === 0}
                        />
                    <ul className="todo-list">
                        {todoItems}
                    </ul>
                </section>
            );
        }

        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        value={this.state.newTodo}
                        onKeyDown={this.handleNewTodoKeyDown.bind(this)}
                        onChange={this.handleChange.bind(this)}
                        autoFocus={true}
                        />
                </header>
                {main}
                {footer}
            </div>
        );
    }
}

export default App;