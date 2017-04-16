/**
 * Created by 78462 on 2016/12/14.
 */
(function(global) {
    
    'use strict';

    function ajax(obj) {
        var client = new XMLHttpRequest(),
            type = (obj.type || '').toLowerCase(),
            dataType = obj.dataType,
            contentType = obj.contentType || typeof obj.data === 'string' ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json',
            path,
            err = [],
            success = [];
        client.onreadystatechange = function() {
            var data;
            if (client.readyState === 4) {
                data = client.responseText;
                if ((client.status >= 200 && client.status < 300) || client.status === 304) {
                    if (dataType === undefined || dataType.toLocaleLowerCase() === 'json') {
                        data = zh(data);
                    }
                    if (obj.success === 'function') {
                        obj.success(data, client)
                    }
                    success.forEach(function(func) {
                        func(data, client);
                    });
                } else {
                    if (obj.error === 'function') {
                        obj.error(data, client)
                    }
                    err.forEach(function(func) {
                        func(data, client);
                    });
                }
            }
        };

        if (type === 'get') {
            path = obj.data ? addURIParams(obj.url, obj.data) : obj.url;
            client.open(type, path, true);
            client.send(null);
        } else if (type === 'post'){
            client.open(type, obj.url, true);
            client.setRequestHeader('Content-Type', contentType);
            client.send(JSON.stringify(obj.data));
        }


        function addURIParams(url, obj) {
            var arr = [];
            for (var name in obj) {
                arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(obj[name]));
            }
            if (arr.length > 0) {
                url += url.indexOf('?') === -1 ? '?' : '&';
                url += arr.join('&');        }
            return url;
        }

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

        ajax.then = ajax.done = function(func) {
            success.push(func);
            return ajax;
        };

        ajax.fail = function(func) {
            err.push(func);
            return ajax;
        };

        return ajax;
    }

    ajax.get = function(url) {
        if (typeof arguments[1] !== 'object') {
            return ajax({
                url: url,
                type: 'get',
                success: arguments[1],
                error: arguments[2] || arguments[1]
            });
        }
        return ajax({
            url: url,
            type: 'get',
            data: arguments[1],
            success: arguments[2],
            error: arguments[3] || arguments[2]
        });
    };

    ajax.post = function(url, data) {
        if (typeof arguments[1] !== 'object') {
            return ajax({
                url: url,
                type: 'post',
                success: arguments[1],
                error: arguments[2] || arguments[1]
            });
        }
        return ajax({
            url: url,
            type: 'post',
            data: arguments[1],
            success: arguments[2],
            error: arguments[3] || arguments[2]
        });
    };

    global.ajax = ajax;
})(this);

