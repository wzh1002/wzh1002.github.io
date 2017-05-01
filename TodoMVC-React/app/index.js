/**
 * Created by 78462 on 2017/4/23.
 */
import React from 'react';
import { render } from 'react-dom';
import App from './modules/App';
import Model from './modules/Model';

let model = new Model('react-todos');

let init = function() {
    render(
        <App model={model}/>,
        document.getElementsByClassName('todoapp')[0]
    );
};

model.subscribe(init);

init();

