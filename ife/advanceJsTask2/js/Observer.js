/**
 * Created by 78462 on 2017/4/17.
 */
(function(gloabal) {

    'use strict';

    class Observer {
        constructor(data) {
            this.data = data;
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    this.watch(data, key, data[key]);
                }
            }
        }

        watch(obj, propName, init) {
            Object.defineProperty(obj, propName, {
                get() {
                    console.log(`你访问了 ${propName}`);
                    return init;
                },

                set(newValue) {
                    console.log(`你设置了 ${propName}，新的值为 ${newValue}`);
                    init = newValue;
                }
            });
        }
    }

    gloabal.Observer = Observer;

})(this);







