import * as types from '../constants/ActionTypes';
import * as actions from './index';
import chai from 'chai';

import jsdom from 'mocha-jsdom';

jsdom();

chai.should();

describe('todo actions', () => {
    it('addTodo should create ADD_TODO action', () => {
        actions.addTodo('Use Redux').should.be.deep.equal({
            type: types.ADD_TODO,
            text: 'Use Redux'
        })
    });

    it('deleteTodo should create DELETE_TODO action', () => {
        actions.deleteTodo(1).should.be.deep.equal({
            type: types.DELETE_TODO,
            id: 1
        });
    });

    it('editTodo should create EDIT_TODO action', () => {
        actions.editTodo(1, 'Use Redux everywhere').should.be.deep.equal({
            type: types.EDIT_TODO,
            id: 1,
            text: 'Use Redux everywhere'
        });
    });

    it('completeTodo should create COMPLETE_TODO action', () => {
        actions.completeTodo(1).should.be.deep.equal({
            type: types.COMPLETE_TODO,
            id: 1
        });
    });

    it('completeAll should create COMPLETE_ALL action', () => {
        actions.completeAll().should.be.deep.equal({
            type: types.COMPLETE_ALL
        });
    });

    it('clearCompleted should create CLEAR_COMPLETED action', () => {
        actions.clearCompleted().should.be.deep.equal({
            type: types.CLEAR_COMPLETED
        });
    });
});