import React, { Component } from 'react';
import { pluralize, classNames } from '../utils';
import { ALL, ACTIVE, COMPLETED } from '../constants/TodoFilters';
import { Router } from 'director/build/director';

const FILTER_TITLES = {
    [ALL]: 'All',
    [ACTIVE]: 'Active',
    [COMPLETED]: 'Completed'
};

const FILTER_LINK = {
    [ALL]: '/all',
    [ACTIVE]: '/active',
    [COMPLETED]: '/completed'
};

class Footer extends Component {

    componentDidMount() {
        let { onShow } = this.props;
        let options = {};
        [ALL, ACTIVE, COMPLETED].forEach(item => {
            options[FILTER_LINK[item]] = () => onShow(item);
        });
        options['/'] = () => onShow(ALL);
        let router = Router(options);
        router.init('/');
    }

    renderTodoCount() {
        let count = this.props.count,
            activeTodoWord = pluralize(count, 'item');
        return (
            <span className="todo-count">
                <strong>{count}</strong> {activeTodoWord} left
            </span>
        );
    }

    renderFilterLink(filter) {
        let title = FILTER_TITLES[filter];
        let { filter: selectedFilter } = this.props;

        return (
            <a className={classNames({selected: filter === selectedFilter})}
               href={`#/${filter.toLowerCase()}`}
                >
                {title}
            </a>
        );
    }

    renderClearButton() {
        let { completedCount, onClearCompleted } = this.props;
        if (completedCount <= 0) {
            return null;
        }
        return (
            <button
                className="clear-completed"
                onClick={onClearCompleted}>
                Clear completed
            </button>
        );
    }

    render() {
        return (
            <footer className="footer">
                { this.renderTodoCount() }
                <ul className="filters">
                    {
                        [ALL, ACTIVE, COMPLETED].map(filter => (
                            <li key={filter}>
                                {this.renderFilterLink(filter)}
                            </li>
                        ))
                    }
                </ul>
                {this.renderClearButton()}
            </footer>
        );
    }
}

export default Footer;
