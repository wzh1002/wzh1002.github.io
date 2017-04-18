/**
 * Created by 78462 on 2017/4/18.
 */
(function(global) {

    "use strict";

    let q = function (selector) {
        let flag = selector.slice(0, 1),
            ele = selector.substring(1);
        if (flag === '#') {
            return document.getElementById(ele);
        } else if (flag === '.') {
            return document.getElementsByClassName(ele);
        } else if (flag === '[') {
            return document.querySelectorAll(selector);
        } else {
            return document.getElementsByTagName(selector);
        }
    };

    const reg = /{{([\s\w\.\s]*)}}/g;

    class Vue {
        constructor(options) {
            let ele = q(options.el);
            this.$el = ele !== null && ele[0] ? ele[0] : ele;
            this.$data = options.data;
            this.hijack(this.$data);
            this.$eventer = new Eventer();
            this.$init = this.$el.innerHTML;
            if (this.$el instanceof Element) {
                this.scan(this.$init);
                this.refresh();
            }
        }

        watch(obj, propName, init, objName) {
            let _this = this;
            this.hijack(init, propName);
            Object.defineProperty(obj, propName, {
                get() {
                    return init;
                },

                set(newValue) {
                    _this.hijack(newValue);
                    init = newValue;
                    if (objName !== undefined) {
                        _this.$eventer.emit(objName + '.' + propName, newValue);
                    } else {
                        _this.$eventer.emit(propName, newValue);
                    }
                }
            });
        }

        $watch(propName, cb) {
            this.$eventer.on(propName, cb);
        }

        hijack(data, dataName) {
            if (typeof data === 'object') {
                for (let key in data) {
                    this.watch(data, key, data[key], dataName);
                }
            }
        }

        scan(str) {
            let arr = [];
            str.replace(reg, (str, key) => arr.push(key));
            arr.forEach((item) => this.$watch(item, this.refresh.bind(this)));
        }

        refresh() {
            this.$el.innerHTML = this.render(this.$init, this.$data);
        }

        render(str, obj) {
            let newStr = str.replace(reg, function(str, key) {
                let keys = key.trim().split('.'),
                    value = obj[keys.shift()];
                if (value == null) {
                    return '';
                }
                for (let i = 0; i < keys.length; i++) {
                    value = value[keys[i]];
                    if (value == null) {
                        return '';
                    }
                }
                return value.toString();
            });
            return newStr;
        }
    }

    class Eventer {
        constructor() {
            this.events = {}
        }

        on(eventName, cb) {
            this.events[eventName] = this.events[eventName] || [];
            this.events[eventName].push(cb);
        }

        emit(eventName, data) {
            let values = eventName.split('.'),
                arr = this.events[eventName];
            if (Array.isArray(arr)) {
                arr.forEach(cb => cb(data));
            }
            if (values.length > 1) {
                values.pop();
                this.emit(values.join('.'), data);
            }
        }
    }

    global.Vue = Vue;

})(this);