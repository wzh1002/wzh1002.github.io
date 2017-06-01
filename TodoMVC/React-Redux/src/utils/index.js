let uuid = () => {
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
};

let pluralize = (count, word) => (
    count === 1 ? word : word + 's'
);

let save = (namespace, data) => (
    localStorage.setItem(namespace, JSON.stringify(data))
);

let fetch = namespace => {
    let store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
};

let classNames = (...args) => {
    let classLists = [];
    args.forEach((arg) => {
        let type = typeof arg;

        if (type === 'string' || type === 'number') {
            classLists.push(arg);
        } else if (Array.isArray(arg)) {
            classLists = classLists.concat(arg);
        } else if (type === 'object') {
            for (let key in arg) {
                if (arg.hasOwnProperty(key) && arg[key]) {
                    classLists.push(key);
                }
            }
        }
    });
    return classLists.join(' ');
};

export {
    uuid,
    pluralize,
    save,
    fetch,
    classNames
};