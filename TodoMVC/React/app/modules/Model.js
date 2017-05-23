/**
 * Created by 78462 on 2017/4/24.
 */
import utils from './utils';

class Model {
    constructor(key) {
        this.key = key;
        this.todos = utils.fetch(key);
        this.onChanges = [];
    }

    subscribe(onChange) {
        this.onChanges.push(onChange);
    }

    inform() {
        utils.save(this.key, this.todos);
        this.onChanges.forEach((cb) => cb());
    }

    addTodo(title) {
        this.todos = this.todos.concat({
            id: utils.uuid(),
            title: title,
            completed: false
        });

        this.inform();
    }

    toggleAll(checked) {
        this.todos = this.todos.map((todo) => Object.assign({}, todo, {completed: checked}));

        this.inform();
    }

    toggle(target) {
        this.todos = this.todos.map((todo) => todo === target ? Object.assign({}, todo, {completed: !todo.completed}) : todo);

        this.inform();
    }

    destroy(target) {
        this.todos = this.todos.filter((todo) => todo !== target);

        this.inform();
    }

    save(target, text) {
        this.todos = this.todos.map((todo) => todo === target ? Object.assign({}, todo, {title: text}) : todo);

        this.inform();
    }

    clearCompleted() {
        this.todos = this.todos.filter((todo) => !todo.completed);

        this.inform();
    }
}

export default Model;