/**
 * Created by 78462 on 2017/3/5.
 */
(function(global) {
    'use strict';

    /*****
     * 获取DOM元素
     * @param selector
     * @returns {*}
     */

    function q(selector) {
        var flag = selector.slice(0, 1),
            ele = selector.substring(1);
        if (flag === '#') {
            return document.getElementById(ele);
        } else if (flag === '.') {
            if (this instanceof Element) {
                return this.getElementsByClassName(ele);
            }
            return document.getElementsByClassName(ele);
        } else if (flag === '[') {
            if (this instanceof Element) {
                return this.querySelectorAll(selector);
            }
            return document.querySelectorAll(selector);
        } else {
            if (this instanceof Element) {
                return this.getElementsByTagName(selector);
            }
            return document.getElementsByTagName(selector);
        }
    }

    /*****
     *
     * @param value 需要转化成json格式的字符串
     * @returns {*}
     */

    function zh(value) {
        if (typeof value === 'string') {
            try {
                value = JSON.parse(value);
            } catch(e) {
                console.log(e);
            }
        }
        return value;
    }

    /******
     *
     * @constructor 事件构造器
     */

    function Eventer() {
        var key = 0;
        this.events = {};
        this.getKey = function() {
            return key++;
        };
    }

    Eventer.prototype.on = function(eventName, callback) {
        var key = this.getKey();
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push({
            key: key,
            func: callback
        });
        return key;
    };

    Eventer.prototype.emit = function(eventName, _) {
        var events = this.events[eventName],
            args = Array.prototype.slice.call(arguments, 1),
            i, m;

        if (!events) {
            return;
        }
        for (i = 0, m = events.length; i < m; i++) {
            events[i].func.apply(null, args);
        }
    };

    Eventer.prototype.remove = function(eventName, key) {
        if (this.events[eventName] && this.events[eventName].length) {
            if (key === undefined) {
                return this.events[eventName] = [];
            }
            var index = this.findIndex(this.events[eventName], key);
            index > -1 ? this.events[eventName].splice(index, 1) : void 0;
        }
    };

    Eventer.prototype.findIndex = function(arr, key) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].key === key) {
                return i;
            }
        }
        return -1;
    };

    /***
     * 数据监测，强制约定值的类型
     * @param obj 属性挂载的对象
     * @param propName 需要监听的属性名
     * @param type 需要监听的属性类型
     * @param init 需要监听的属性的初始值
     * @param callback 当监听的属性值改变时的回调函数
     * @param flag 是否要给回调函数绑定this值
     * @returns {*}
     */

    function watch(obj, propName, type, init, callback, flag) {
        var oldValue = init, proxy;
        if (typeof type !== 'string') {
            return console.error('type must be string and the value must be string, boolean, number, object, array, function');
        }
        type = type.toLowerCase();
        if (type !== 'string' && type !== 'boolean' && type !== 'number' && type !== 'object' && type !== 'array') {
            return console.error('type must be string and the value must be string, boolean, number, object, array, function');
        }
        if (typeof init !== type && !(init instanceof Array && type === 'array')) {
            return console.error('the init value type not equal expected type');
        }
        try {
            Object.defineProperty(obj, propName, {

                get: function() {
                    return oldValue;
                },
                set: function(newValue) {
                    if (oldValue === newValue) {
                        return;
                    }
                    if (typeof newValue !== type && !(newValue instanceof Array && type === 'array')) {
                        return console.error('the value type not equal expected type');
                    }
                    proxy = oldValue;
                    oldValue = newValue;
                    flag ? (callback.call(obj, newValue, proxy) === false  ? oldValue = proxy : void 0) :
                    callback(newValue, proxy) === false ? oldValue = proxy : void 0;
                },

                enumerable: true,
                configurable: true
            });
        } catch (error) {
            console.dir(error);
            console.log("browser not supported.");
        }
    }

    /******
     * DOM事件绑定与事件代理
     * @returns {*}
     */

    function on() {
        var length = arguments.length,
            ele = arguments[0],
            type = arguments[1],
            selector, callback;
        if (!ele instanceof Element) {
            return console.error('ele is not a Element !');
        }
        if (length === 3) {
            if (typeof arguments[2] === 'function') {
                addEvent(ele, type, arguments[2]);
            } else {
                console.error('callback is not a function');
            }
        } else if (length === 4) {
            if (typeof arguments[3] === 'function') {
                selector = arguments[2];
                callback = arguments[3];
                addEvent(ele, type, function (e) {
                    proxyEvent(e, callback);
                });
            } else {
                console.error('callback is not a function');
            }
        }

        function proxyEvent(e, callback) {
            e = e || window.event;
            var src = e.target || e.srcElement;
            var currentTarget = e.currentTarget;
            var target = match(currentTarget, src, selector);
            if (target instanceof Element) {
                if (callback) {
                    callback.call(target, e);
                }
            }

            function match(ancestor, child, selector) {
                var flag = selector.charAt(0);
                var result = false;
                if (ancestor === child || child.parentNode === null) {
                    return false;
                }
                if (flag === '#') {
                    result = child.id === selector.slice(1);
                } else if (flag === '.') {
                    result = (' ' + child.className + ' ').indexOf(' ' + selector.slice(1) + ' ') !== -1;
                } else if (flag === '[') {
                    var arr = selector.slice(1, -1).split('=');
                    result = arr[1] ? child.getAttribute(arr[0]) === arr[1] : child.getAttribute(arr[0]) !== null;
                } else {
                    result = child.tagName.toLowerCase() === selector.toLowerCase();
                }
                if (result) {
                    return child;
                }
                return match(ancestor, child.parentNode, selector);
            }
        }

        function addEvent(ele, type, callback) {
            if (typeof ele.addEventListener === 'function') {
                ele.addEventListener(type, callback);
            } else {
                ele.attachEvent('on' + type, function (e) {
                    callback(fixEvent(e));
                });
            }

            function fixEvent(event) {
                event.preventDefault = fixEvent.preventDefault;
                event.stopPropagation = fixEvent.stopPropagation;
                return event;
            }

            fixEvent.preventDefault = function () {
                this.returnValue = false;
            };
            fixEvent.stopPropagation = function () {
                this.cancelBubble = true;
            };
        }
    }

    /*****
     * 移除目标元素上的某个类，类值为value
     * @param ele
     * @param value
     * @returns {string}
     */

    function removeClass(ele, value) {
        var result = ' ' + ele.className + ' ';
        var target = ' ' + value + ' ';
        while (result.indexOf(target) > -1) {
            result = result.replace(target, ' ');
        }
        ele.className = value ? result.trim() : '';
    }

    /******
     * 给目标元素添加一个类，类值为value
     * @param ele
     * @param value
     */

    function addClass(ele, value) {
        var result = ' ' + ele.className + ' ';
        var target = ' ' + value + ' ';
        result.indexOf(target) < 0 ? ele.className = (result + value).trim() : void 0;
    }

    function show(ele) {
       removeClass(ele, 'hide');
    }

    function hide(ele) {
        addClass(ele, 'hide');
    }

    /***
     * 将字段转化成小驼峰格式
     * @param value
     * @returns {*}
     */

    function camel(value) {
        var arr = value.split('-');
        var len = arr.length;
        if (len === 1) {
            return value;
        }
        for (var i = 1; i < len; i ++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }
        return arr.join('');
    }

    var utils = {};

    utils.q = q;
    utils.zh = zh;
    utils.Eventer = Eventer;
    utils.watch = watch;
    utils.on = on;
    utils.show = show;
    utils.hide = hide;
    utils.removeClass = removeClass;
    utils.addClass = addClass;
    utils.camel = camel;

    global.utils = utils;

})(this);