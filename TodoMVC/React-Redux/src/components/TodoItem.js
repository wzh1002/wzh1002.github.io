import React, { Component, PropTypes } from 'react';
import { classNames } from '../utils';
import TodoTextInput from './TodoTextInput';


class TodoItem extends Component {

    static propTypes = {
        todo: PropTypes.object.isRequired,
        editTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    state = {
        editing: false
    };

   handleDoubleClick = e => {
       this.setState({editing: true});
   }

   handleSave = (id, text) => {
       text.length === 0 ? this.props.deleteTodo(id) : this.props.editTodo(id, text);
       this.setState({editing: false});
   }

   render() {
       let { todo, completeTodo, deleteTodo } = this.props;

       let element;
       if (this.state.editing) {
           element = (
               <TodoTextInput
                   text={todo.text}
                   editing={this.state.editing}
                   onSave={(text) => this.handleSave(todo.id, text)}
                   />
           );
       } else {
           element = (
               <div className="view">
                   <input className="toggle"
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => completeTodo(todo.id)}
                       />
                   <label onDoubleClick={this.handleDoubleClick}>
                       {todo.text}
                   </label>
                   <button className="destroy"
                           onClick={() => deleteTodo(todo.id)}
                       >
                   </button>
               </div>
           );
       }

       return (
           <li className={
                  classNames({
                    completed: todo.completed,
                    editing: this.state.editing
                  })
               }>
               {element}
           </li>
       );
   }
}

export default TodoItem;
