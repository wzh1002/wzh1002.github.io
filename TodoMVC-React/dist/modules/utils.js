'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by 78462 on 2017/4/24.
 */
var utils = {
    uuid: function uuid() {
        var uuid = '';

        for (var i = 0; i < 32; i++) {
            var random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
        }

        return uuid;
    },
    pluralize: function pluralize(count, word) {
        return count === 1 ? word : word + 's';
    },
    save: function save(namespace, data) {
        return localStorage.setItem(namespace, JSON.stringify(data));
    },
    fetch: function fetch(namespace) {
        var store = localStorage.getItem(namespace);
        return store && JSON.parse(store) || [];
    },
    classNames: function classNames() {
        var classLists = [];

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        args.forEach(function (arg) {
            var type = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

            if (type === 'string' || type === 'number') {
                classLists.push(arg);
            } else if (Array.isArray(arg)) {
                classLists = classLists.concat(arg);
            } else if (type === 'object') {
                for (var key in arg) {
                    if (arg.hasOwnProperty(key) && arg[key]) {
                        classLists.push(key);
                    }
                }
            }
        });
        return classLists.join(' ');
    }
};

exports.default = utils;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdXRpbHMuanMiXSwibmFtZXMiOlsidXRpbHMiLCJ1dWlkIiwiaSIsInJhbmRvbSIsIk1hdGgiLCJ0b1N0cmluZyIsInBsdXJhbGl6ZSIsImNvdW50Iiwid29yZCIsInNhdmUiLCJuYW1lc3BhY2UiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInN0b3JlIiwiZ2V0SXRlbSIsInBhcnNlIiwiY2xhc3NOYW1lcyIsImNsYXNzTGlzdHMiLCJhcmdzIiwiZm9yRWFjaCIsImFyZyIsInR5cGUiLCJwdXNoIiwiQXJyYXkiLCJpc0FycmF5IiwiY29uY2F0Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFHQSxJQUFJQSxRQUFRO0FBQ1JDLFFBRFEsa0JBQ0Q7QUFDSCxZQUFJQSxPQUFPLEVBQVg7O0FBRUEsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0FBQ3pCLGdCQUFJQyxTQUFTQyxLQUFLRCxNQUFMLEtBQWdCLEVBQWhCLEdBQXFCLENBQWxDO0FBQ0EsZ0JBQUlELE1BQU0sQ0FBTixJQUFXQSxNQUFNLEVBQWpCLElBQXVCQSxNQUFNLEVBQTdCLElBQW1DQSxNQUFNLEVBQTdDLEVBQWlEO0FBQzdDRCx3QkFBUSxHQUFSO0FBQ0g7QUFDREEsb0JBQVEsQ0FBQ0MsTUFBTSxFQUFOLEdBQVcsQ0FBWCxHQUFnQkEsTUFBTSxFQUFOLEdBQVlDLFNBQVMsQ0FBVCxHQUFhLENBQXpCLEdBQThCQSxNQUEvQyxFQUNIRSxRQURHLENBQ00sRUFETixDQUFSO0FBRUg7O0FBRUQsZUFBT0osSUFBUDtBQUNILEtBZE87QUFnQlJLLGFBaEJRLHFCQWdCRUMsS0FoQkYsRUFnQlNDLElBaEJULEVBZ0JlO0FBQ25CLGVBQU9ELFVBQVUsQ0FBVixHQUFjQyxJQUFkLEdBQXFCQSxPQUFPLEdBQW5DO0FBQ0gsS0FsQk87QUFvQlJDLFFBcEJRLGdCQW9CSEMsU0FwQkcsRUFvQlFDLElBcEJSLEVBb0JjO0FBQ2xCLGVBQU9DLGFBQWFDLE9BQWIsQ0FBcUJILFNBQXJCLEVBQWdDSSxLQUFLQyxTQUFMLENBQWVKLElBQWYsQ0FBaEMsQ0FBUDtBQUNILEtBdEJPO0FBd0JSSyxTQXhCUSxpQkF3QkZOLFNBeEJFLEVBd0JTO0FBQ2IsWUFBSU8sUUFBUUwsYUFBYU0sT0FBYixDQUFxQlIsU0FBckIsQ0FBWjtBQUNBLGVBQVFPLFNBQVNILEtBQUtLLEtBQUwsQ0FBV0YsS0FBWCxDQUFWLElBQWdDLEVBQXZDO0FBQ0gsS0EzQk87QUE2QlJHLGNBN0JRLHdCQTZCWTtBQUNoQixZQUFJQyxhQUFhLEVBQWpCOztBQURnQiwwQ0FBTkMsSUFBTTtBQUFOQSxnQkFBTTtBQUFBOztBQUVoQkEsYUFBS0MsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUNsQixnQkFBSUMsY0FBY0QsR0FBZCx5Q0FBY0EsR0FBZCxDQUFKOztBQUVBLGdCQUFJQyxTQUFTLFFBQVQsSUFBcUJBLFNBQVMsUUFBbEMsRUFBNEM7QUFDeENKLDJCQUFXSyxJQUFYLENBQWdCRixHQUFoQjtBQUNILGFBRkQsTUFFTyxJQUFJRyxNQUFNQyxPQUFOLENBQWNKLEdBQWQsQ0FBSixFQUF3QjtBQUMzQkgsNkJBQWFBLFdBQVdRLE1BQVgsQ0FBa0JMLEdBQWxCLENBQWI7QUFDSCxhQUZNLE1BRUEsSUFBSUMsU0FBUyxRQUFiLEVBQXVCO0FBQzFCLHFCQUFLLElBQUlLLEdBQVQsSUFBZ0JOLEdBQWhCLEVBQXFCO0FBQ2pCLHdCQUFJQSxJQUFJTyxjQUFKLENBQW1CRCxHQUFuQixLQUEyQk4sSUFBSU0sR0FBSixDQUEvQixFQUF5QztBQUNyQ1QsbUNBQVdLLElBQVgsQ0FBZ0JJLEdBQWhCO0FBQ0g7QUFDSjtBQUNKO0FBQ0osU0FkRDtBQWVBLGVBQU9ULFdBQVdXLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBUDtBQUNIO0FBL0NPLENBQVo7O2tCQWtEZWhDLEsiLCJmaWxlIjoibW9kdWxlcy91dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IDc4NDYyIG9uIDIwMTcvNC8yNC5cclxuICovXHJcbmxldCB1dGlscyA9IHtcclxuICAgIHV1aWQoKSB7XHJcbiAgICAgICAgbGV0IHV1aWQgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gOCB8fCBpID09PSAxMiB8fCBpID09PSAxNiB8fCBpID09PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgdXVpZCArPSAnLSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXVpZCArPSAoaSA9PT0gMTIgPyA0IDogKGkgPT09IDE2ID8gKHJhbmRvbSAmIDMgfCA4KSA6IHJhbmRvbSkpXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHV1aWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIHBsdXJhbGl6ZShjb3VudCwgd29yZCkge1xyXG4gICAgICAgIHJldHVybiBjb3VudCA9PT0gMSA/IHdvcmQgOiB3b3JkICsgJ3MnO1xyXG4gICAgfSxcclxuXHJcbiAgICBzYXZlKG5hbWVzcGFjZSwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lc3BhY2UsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZmV0Y2gobmFtZXNwYWNlKSB7XHJcbiAgICAgICAgbGV0IHN0b3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZXNwYWNlKTtcclxuICAgICAgICByZXR1cm4gKHN0b3JlICYmIEpTT04ucGFyc2Uoc3RvcmUpKSB8fCBbXTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xhc3NOYW1lcyguLi5hcmdzKSB7XHJcbiAgICAgICAgbGV0IGNsYXNzTGlzdHMgPSBbXTtcclxuICAgICAgICBhcmdzLmZvckVhY2goKGFyZykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHlwZSA9IHR5cGVvZiBhcmc7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdHMucHVzaChhcmcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0cyA9IGNsYXNzTGlzdHMuY29uY2F0KGFyZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhcmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzTGlzdHMuam9pbignICcpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7Il19
