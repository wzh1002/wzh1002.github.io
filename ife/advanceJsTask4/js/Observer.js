/**
 * Created by 78462 on 2017/4/17.
 */
(function(gloabal) {

    'use strict';

    class Observer {
        constructor(data) {
            this.data = data;
            this.hijack(data);
            this.$eventer = new Eventer();
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
                    if (objName !== undefined) {
                        _this.$eventer.emit(objName + '.' + propName, newValue);
                    } else {
                        _this.$eventer.emit(propName, newValue);
                    }
                    init = newValue;
                }
            });
        }

        $watch(propName, cb) {
            this.$eventer.on(propName, cb);
        }

        hijack(data, dataName) {
            if (typeof data === 'object') {
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        this.watch(data, key, data[key], dataName);
                    }
                }
            }
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

    gloabal.Observer = Observer;

})(this);





