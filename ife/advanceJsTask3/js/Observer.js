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

        watch(obj, propName, init) {
            let _this = this;
            this.hijack(init);
            Object.defineProperty(obj, propName, {
                get() {
                    console.log(`你访问了 ${propName}`);
                    return init;
                },

                set(newValue) {
                    console.log(`你设置了 ${propName}，新的值为 ${newValue}`);
                    _this.hijack(newValue);
                    _this.$eventer.emit(propName, newValue);
                    init = newValue;
                }
            });
        }

        $watch(propName, cb) {
            this.$eventer.on(propName, cb);
        }

        hijack(data) {
            if (typeof data === 'object') {
                for (let key in data) {
                    this.watch(data, key, data[key]);
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
            let arr = this.events[eventName];
            if (Array.isArray(arr)) {
                arr.forEach(cb => cb(data));
            }
        }
    }

    gloabal.Observer = Observer;

})(this);