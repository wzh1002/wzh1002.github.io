/**
 * Created by 78462 on 2017/4/30.
 */
const name = 'todo-vue';

let utils = {
    filters: {
        all: (todos) => todos,
        active: (todos) => todos.filter((todo) => !todo.completed),
        completed: (todos) => todos.filter((todo) => todo.completed)
    },

    uuid() {
        let uuid = '';

        for (let i = 0; i < 32; i++) {
            let random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
                .toString(16);
        }

        return uuid;
    },

    save(data) {
        return localStorage.setItem(name, JSON.stringify(data));
    },

    fetch() {
        let store = localStorage.getItem(name);
        return (store && JSON.parse(store)) || [];
    }
};

export default utils;