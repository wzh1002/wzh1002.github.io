import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers';
import { fetch, save } from './utils';
import { NAME_SPACE } from './constants/namespace';

let store = createStore(reducer, fetch(NAME_SPACE));
store.subscribe(() => {
    save(NAME_SPACE, store.getState());
});

window.store = store;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NewApp = require('./containers/App').default;
        render(NewApp)
    });
}