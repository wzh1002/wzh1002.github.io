/**
 * Created by 78462 on 2017/3/5.
 */
(function(global, utils) {
    'use strict';

    var q = utils.q, watch = utils.watch, on = utils.on;

    function V(options) {
        this.eles = {};
        this.eventer = options.eventer;
        this.initRootEle(options.el);
        this.initEles(options.eles);
        this.bindFuncs(options.funcs);
        this.bindDataListener(options.data);
        this.bindEvent(options.eventsMap);
        this.provideInterface(options.api);
    }

    V.prototype.q = function(selector) {
        return q.call(this.el, selector);
    };

    V.prototype.initRootEle = function(el) {
        if (typeof el === 'string') {
            var flag = el.charAt(0);
            var arr;
            if (flag === '#') {
                this.el = q(el)
            } else {
                arr = el.split(' ');
                arr[1] ? this.el = q(arr[0])[parseInt(arr[1])] : q(el);
            }
        } else if (options.el instanceof Element) {
            this.el = el;
        } else {
            return console.error('el is must be a selector or Element')
        }
    };

    V.prototype.initEles = function(eles) {
        var arr;
        for (var key in eles) {
            arr = eles[key].split(' ');
            this.eles[key] = arr[1] ? this.q(arr[0])[parseInt(arr[1])] : this.q(eles[key]);
        }
    };

    V.prototype.bindFuncs = function(data) {
        for (var key in data) {
            this[key] = data[key];
        }
    };

    V.prototype.bindDataListener = function(data) {
        for (var key in data) {
            if (typeof data[key].callback === 'function') {
                watch(this, key, data[key].type, data[key].init, data[key].callback);
            } else {
                var arr = data[key].callback.split(' ');
                watch(this, key, data[key].type, data[key].init, this[arr[0]], arr[1]);
            }
        }
    };

    V.prototype.bindEvent = function(map) {
        var arr,
            type,
            selector;
        for (var key in map) {
            arr = key.split(' ');
            type = arr[0];
            selector = arr[1];
            on(this.el, type, selector, this[map[key]]);
        }
    };

    V.prototype.provideInterface = function(map) {
        for (var key in map) {
            if (typeof map[key] === 'string') {
                this.eventer.on(key, this[map[key]]);
            } else {
                this.eventer.on(key, map[key]);
            }
        }
    };

    V.prototype.exec = function(name, data) {
        this.eventer.emit(name, data);
    };

    global.V = V;

})(this, utils);