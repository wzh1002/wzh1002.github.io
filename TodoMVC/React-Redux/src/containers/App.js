import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions';

let App = ({todos, actions}) => (
    <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
    </div>
);

let mapStateProps = state => ({
    todos: state.todos
});

let mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
    mapStateProps,
    mapDispatchToProps
)(App);
