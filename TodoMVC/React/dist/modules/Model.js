'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by 78462 on 2017/4/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
    function Model(key) {
        _classCallCheck(this, Model);

        this.key = key;
        this.todos = _utils2.default.fetch(key);
        this.onChanges = [];
    }

    _createClass(Model, [{
        key: 'subscribe',
        value: function subscribe(onChange) {
            this.onChanges.push(onChange);
        }
    }, {
        key: 'inform',
        value: function inform() {
            _utils2.default.save(this.key, this.todos);
            this.onChanges.forEach(function (cb) {
                return cb();
            });
        }
    }, {
        key: 'addTodo',
        value: function addTodo(title) {
            this.todos = this.todos.concat({
                id: _utils2.default.uuid(),
                title: title,
                completed: false
            });

            this.inform();
        }
    }, {
        key: 'toggleAll',
        value: function toggleAll(checked) {
            this.todos = this.todos.map(function (todo) {
                return Object.assign({}, todo, { completed: checked });
            });

            this.inform();
        }
    }, {
        key: 'toggle',
        value: function toggle(target) {
            this.todos = this.todos.map(function (todo) {
                return todo === target ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
            });

            this.inform();
        }
    }, {
        key: 'destroy',
        value: function destroy(target) {
            this.todos = this.todos.filter(function (todo) {
                return todo !== target;
            });

            this.inform();
        }
    }, {
        key: 'save',
        value: function save(target, text) {
            this.todos = this.todos.map(function (todo) {
                return todo === target ? Object.assign({}, todo, { title: text }) : todo;
            });

            this.inform();
        }
    }, {
        key: 'clearCompleted',
        value: function clearCompleted() {
            this.todos = this.todos.filter(function (todo) {
                return !todo.completed;
            });

            this.inform();
        }
    }]);

    return Model;
}();

exports.default = Model;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvTW9kZWwuanMiXSwibmFtZXMiOlsiTW9kZWwiLCJrZXkiLCJ0b2RvcyIsImZldGNoIiwib25DaGFuZ2VzIiwib25DaGFuZ2UiLCJwdXNoIiwic2F2ZSIsImZvckVhY2giLCJjYiIsInRpdGxlIiwiY29uY2F0IiwiaWQiLCJ1dWlkIiwiY29tcGxldGVkIiwiaW5mb3JtIiwiY2hlY2tlZCIsIm1hcCIsInRvZG8iLCJPYmplY3QiLCJhc3NpZ24iLCJ0YXJnZXQiLCJmaWx0ZXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7cWpCQUFBOzs7OztBQUdBOzs7Ozs7OztJQUVNQSxLO0FBQ0YsbUJBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDYixhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxhQUFLQyxLQUFMLEdBQWEsZ0JBQU1DLEtBQU4sQ0FBWUYsR0FBWixDQUFiO0FBQ0EsYUFBS0csU0FBTCxHQUFpQixFQUFqQjtBQUNIOzs7O2tDQUVTQyxRLEVBQVU7QUFDaEIsaUJBQUtELFNBQUwsQ0FBZUUsSUFBZixDQUFvQkQsUUFBcEI7QUFDSDs7O2lDQUVRO0FBQ0wsNEJBQU1FLElBQU4sQ0FBVyxLQUFLTixHQUFoQixFQUFxQixLQUFLQyxLQUExQjtBQUNBLGlCQUFLRSxTQUFMLENBQWVJLE9BQWYsQ0FBdUIsVUFBQ0MsRUFBRDtBQUFBLHVCQUFRQSxJQUFSO0FBQUEsYUFBdkI7QUFDSDs7O2dDQUVPQyxLLEVBQU87QUFDWCxpQkFBS1IsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQjtBQUMzQkMsb0JBQUksZ0JBQU1DLElBQU4sRUFEdUI7QUFFM0JILHVCQUFPQSxLQUZvQjtBQUczQkksMkJBQVc7QUFIZ0IsYUFBbEIsQ0FBYjs7QUFNQSxpQkFBS0MsTUFBTDtBQUNIOzs7a0NBRVNDLE8sRUFBUztBQUNmLGlCQUFLZCxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXZSxHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLHVCQUFVQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkYsSUFBbEIsRUFBd0IsRUFBQ0osV0FBV0UsT0FBWixFQUF4QixDQUFWO0FBQUEsYUFBZixDQUFiOztBQUVBLGlCQUFLRCxNQUFMO0FBQ0g7OzsrQkFFTU0sTSxFQUFRO0FBQ1gsaUJBQUtuQixLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXZSxHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLHVCQUFVQSxTQUFTRyxNQUFULEdBQWtCRixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkYsSUFBbEIsRUFBd0IsRUFBQ0osV0FBVyxDQUFDSSxLQUFLSixTQUFsQixFQUF4QixDQUFsQixHQUEwRUksSUFBcEY7QUFBQSxhQUFmLENBQWI7O0FBRUEsaUJBQUtILE1BQUw7QUFDSDs7O2dDQUVPTSxNLEVBQVE7QUFDWixpQkFBS25CLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdvQixNQUFYLENBQWtCLFVBQUNKLElBQUQ7QUFBQSx1QkFBVUEsU0FBU0csTUFBbkI7QUFBQSxhQUFsQixDQUFiOztBQUVBLGlCQUFLTixNQUFMO0FBQ0g7Ozs2QkFFSU0sTSxFQUFRRSxJLEVBQU07QUFDZixpQkFBS3JCLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdlLEdBQVgsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsdUJBQVVBLFNBQVNHLE1BQVQsR0FBa0JGLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixJQUFsQixFQUF3QixFQUFDUixPQUFPYSxJQUFSLEVBQXhCLENBQWxCLEdBQTJETCxJQUFyRTtBQUFBLGFBQWYsQ0FBYjs7QUFFQSxpQkFBS0gsTUFBTDtBQUNIOzs7eUNBRWdCO0FBQ2IsaUJBQUtiLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdvQixNQUFYLENBQWtCLFVBQUNKLElBQUQ7QUFBQSx1QkFBVSxDQUFDQSxLQUFLSixTQUFoQjtBQUFBLGFBQWxCLENBQWI7O0FBRUEsaUJBQUtDLE1BQUw7QUFDSDs7Ozs7O2tCQUdVZixLIiwiZmlsZSI6Im1vZHVsZXMvTW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSA3ODQ2MiBvbiAyMDE3LzQvMjQuXHJcbiAqL1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcblxyXG5jbGFzcyBNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXkpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLnRvZG9zID0gdXRpbHMuZmV0Y2goa2V5KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZShvbkNoYW5nZSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VzLnB1c2gob25DaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZm9ybSgpIHtcclxuICAgICAgICB1dGlscy5zYXZlKHRoaXMua2V5LCB0aGlzLnRvZG9zKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlcy5mb3JFYWNoKChjYikgPT4gY2IoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9kbyh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmNvbmNhdCh7XHJcbiAgICAgICAgICAgIGlkOiB1dGlscy51dWlkKCksXHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmluZm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUFsbChjaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MubWFwKCh0b2RvKSA9PiBPYmplY3QuYXNzaWduKHt9LCB0b2RvLCB7Y29tcGxldGVkOiBjaGVja2VkfSkpO1xyXG5cclxuICAgICAgICB0aGlzLmluZm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSh0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5tYXAoKHRvZG8pID0+IHRvZG8gPT09IHRhcmdldCA/IE9iamVjdC5hc3NpZ24oe30sIHRvZG8sIHtjb21wbGV0ZWQ6ICF0b2RvLmNvbXBsZXRlZH0pIDogdG9kbyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5mb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSh0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8gIT09IHRhcmdldCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5mb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSh0YXJnZXQsIHRleHQpIHtcclxuICAgICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5tYXAoKHRvZG8pID0+IHRvZG8gPT09IHRhcmdldCA/IE9iamVjdC5hc3NpZ24oe30sIHRvZG8sIHt0aXRsZTogdGV4dH0pIDogdG9kbyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5mb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiAhdG9kby5jb21wbGV0ZWQpO1xyXG5cclxuICAgICAgICB0aGlzLmluZm9ybSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RlbDsiXX0=
