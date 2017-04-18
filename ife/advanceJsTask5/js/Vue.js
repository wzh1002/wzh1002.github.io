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

    class Vue {
        constructor(options) {
            let ele = q(options.el);
            this.$el = ele !== null && ele[0] ? ele[0] : ele;
            this.$data = options.data;
            if (this.$el instanceof Element) {
                this.$el.innerHTML = this.render(this.$el.innerHTML, this.$data);
            }
        }

        render(str, obj) {
            let newStr = str.replace(/{{([\s\w\.\s]*)}}/g, function(str, key) {
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

    global.Vue = Vue;

})(this);