import todos from './todos';
import * as type from '../constants/ActionTypes';
import { uuid } from '../utils';

describe('Test todo reducers', () => {
    it('Test handle initial state', () => {
        todos(undefined, {}).should.be.deep.equal([]);
    });

    it('Test handle ADD_TODO', () => {
        const state = [];
        const action = {
            type: type.ADD_TODO,
            text: 'zhonghua'
        };
        const newState = todos(state, action);
        const expectState = [
            {
                id: newState[0].id,
                text: 'zhonghua',
                completed: false
            }
        ];

        newState.should.be.deep.equal(expectState);
        newState.should.be.not.equal(state);
    });

    it('Test handle DELETE_TODO', () => {
        const id = uuid();
        const state = [
            {
                id: uuid(),
                text: 'haha',
                completed: true
            },
            {
                id: id,
                text: 'zhonghua',
                completed: false
            }
        ];
        const action = {
            type: type.DELETE_TODO,
            id: id
        };
        const newState = todos(state,action);
        const expectState = [state[0]];

        newState.should.be.deep.equal(expectState);
        newState[0].should.be.equal(expectState[0]);
        newState.should.be.not.equal(state);
    });

    it('Test handle EDIT_TODO', () => {
        const id = uuid();
        const state = [
            {
                id: id,
                text: 'zhonghua',
                completed: false
            },
            {
                id: uuid(),
                text: '233',
                completed: true
            }
        ];
        const action = {
            type: type.EDIT_TODO,
            text: 'love',
            id: id
        };
        const newState = todos(state, action);
        const expectState = [
            {
                text: 'love',
                id: id,
                completed: false
            },
            state[1]
        ];

        newState.should.be.deep.equal(expectState);
        newState[1].should.be.equal(expectState[1]);
        newState.should.be.not.equal(state);
    });

    it('Test handle COMPLETED_TODO', () => {
        const id = uuid();
        const state = [
            {
                id: id,
                text: '666',
                completed: false
            },
            {
                id: uuid(),
                text: '233',
                completed: true
            }
        ];
        const action = {
            type: type.COMPLETE_TODO,
            id: id
        };
        const newState = todos(state, action);
        const expectState = [
            {
                id: id,
                text: '666',
                completed: true
            },
            state[1]
        ];

        newState.should.be.deep.equal(expectState);
        newState.should.be.not.equal(state);
        newState[0].should.be.not.equal(state[0]);
        newState[1].should.be.equal(state[1]);
    });

    it('Test handle COMPLETE_ALL', () => {
        const state = [
            {
                id: uuid(),
                text: '666',
                completed: false
            },
            {
                id: uuid(),
                text: '233',
                completed: true
            }
        ];
        const action = {
            type: type.COMPLETE_ALL
        };
        const newState = todos(state, action);
        const expectState = [
            {
                id: state[0].id,
                text: '666',
                completed: true
            },
            state[1]
        ];

        newState.should.be.deep.equal(expectState);
        newState.should.be.not.equal(state);
        newState[0].should.be.not.equal(state[0]);
        newState[1].should.be.not.equal(state[1]);
    });

    it('Test handle CLEAR_COMPLETED', () => {
        const state = [
            {
                id: uuid(),
                text: '666',
                completed: false
            },
            {
                id: uuid(),
                text: '233',
                completed: true
            },
            {
                id: uuid(),
                text: '???',
                completed: true
            }
        ];
        const action = {
            type: type.CLEAR_COMPLETED
        };
        const newState = todos(state, action);
        const expectState = [state[0]];

        newState.should.be.deep.equal(expectState);
        newState.should.be.not.equal(state);
    });
});