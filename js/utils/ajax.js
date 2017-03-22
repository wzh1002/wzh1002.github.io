/**
 * Created by 78462 on 2016/12/14.
 */
function ajax(obj) {
    var xhr = new XMLHttpRequest(),
        type = (obj.type || '').toLowerCase(),
        dataType = obj.dataType,
        contentType = obj.contentType || typeof obj.data === 'string' ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json',
        path;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                if (typeof obj.success === 'function') {
                    if (dataType !== undefined && dataType.toLocaleLowerCase() !== 'json') {
                        return obj.success(xhr.responseText, xhr);
                    }
                    obj.success(zh(xhr.responseText), xhr);
                }
            } else {
                if (typeof obj.error === 'function') {
                    obj.error(xhr.responseText, xhr);
                }
            }
        }
    };

    if (type === 'get') {
        obj.data ? path = addURIParams(obj.url, obj.data) : path = obj.url;
        xhr.open(type, path, true);
        xhr.send(null);
    } else if (type === 'post'){
        xhr.open(type, obj.url, true);
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.send(JSON.stringify(obj.data));
    }


    function addURIParams(url, obj) {
        var arr = [];
        for (var name in obj) {
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(obj[name]));
        }
        if (arr.length > 0) {
            url.indexOf('?') === -1 ? url += '?' : url += '&';
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
}

ajax.get = function(url) {
    if (typeof arguments[1] !== 'object') {
        this({
            url: url,
            type: 'get',
            success: arguments[1],
            error: arguments[1]
        });
    } else {
        this({
            url: url,
            type: 'get',
            data: arguments[1],
            success: arguments[2],
            error: arguments[2] || arguments[3]
        });
    }
};

ajax.post = function(url, data) {
    this({
        url: url,
        type: 'post',
        data: data,
        success: arguments[2],
        error: arguments[2] || arguments[3]
    });
};
