/**
 * Created by 78462 on 2017/4/23.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import config from './config';
import utils from './utils';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editText: this.props.todo.title
        };
    }

    handleSubmit() {
        var val = this.state.editText.trim();
        if (val) {
            this.props.onSave(val);
            this.setState({editText: val});
        } else {
            this.props.onDestroy();
        }
    }

    handleEdit() {
        this.props.onEdit();
        this.setState({
            editText: this.props.todo.title
        });
    }

    handleKeyDown(event) {
        if (event.which === config.ESCAPE_KEY) {
            this.setState({
                editText: this.props.todo.title
            });
            this.props.onCancel(event);
        } else if (event.which === config.ENTER_KEY) {
            this.handleSubmit(event);
        }
    }

    handleChange(event) {
        if (this.props.editing) {
            this.setState({editText: event.target.value});
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.todo !== this.props.todo ||
            nextProps.editing !== this.props.editing ||
            nextState.editText !== this.state.editText
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.editing && this.props.editing) {
            var node = ReactDOM.findDOMNode(this.refs.editField);
            node.focus();
            node.setSelectionRange(node.value.length, node.value.length);
        }
    }

    render() {
        return (
            <li className={
                utils.classNames({
                    completed: this.props.todo.completed,
					editing: this.props.editing
                })
            }>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.todo.completed}
                        onChange={this.props.onToggle}
                        />
                    <label onDoubleClick={this.handleEdit.bind(this)}>
                        {this.props.todo.title}
                    </label>
                    <button className="destroy" onClick={this.props.onDestroy} />
                </div>
                <input
                    ref="editField"
                    className="edit"
                    value={this.state.editText}
                    onBlur={this.handleSubmit.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.handleKeyDown.bind(this)}
                    />
            </li>
        );
    }
}

export default Item;