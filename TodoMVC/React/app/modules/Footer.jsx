/**
 * Created by 78462 on 2017/4/24.
 */
import React, { Component } from 'react';
import utils from './utils';
import config from './config';

class Footer extends Component {

    render() {
        let count = this.props.count,
            activeTodoWord = utils.pluralize(count, 'item'),
            selected = this.props.nowShowing,
            clearButton = this.props.completedCount <= 0 ? null : (
                <button
                    className="clear-completed"
                    onClick={this.props.onClearCompleted}>
                    Clear completed
                </button>
            );

        return (
            <footer className="footer">
					<span className="todo-count">
						<strong>{count}</strong> {activeTodoWord} left
					</span>
                <ul className="filters">
                    <li>
                        <a
                            href="#/"
                            className={selected === config.ALL ? 'selected' : ''}>
                            All
                        </a>
                    </li>
                    <li>
                        <a
                            href="#/active"
                            className={selected === config.ACTIVE ? 'selected' : ''}>
                            Active
                        </a>
                    </li>
                    <li>
                        <a
                            href="#/completed"
                            className={selected === config.COMPLETED ? 'selected' : ''}>
                            Completed
                        </a>
                    </li>
                </ul>
                {clearButton}
            </footer>
        );
    }
}

export default Footer;