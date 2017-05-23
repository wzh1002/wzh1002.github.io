'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _director = require('../../dist/director/build/director');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by 78462 on 2017/4/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            nowShowing: _config2.default.ALL,
            editing: null,
            newTodo: ''
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var setState = this.setState,
                router = (0, _director.Router)({
                '/': setState.bind(this, { nowShowing: _config2.default.ALL }),
                '/active': setState.bind(this, { nowShowing: _config2.default.ACTIVE }),
                '/completed': setState.bind(this, { nowShowing: _config2.default.COMPLETED })
            });
            router.init('/');
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({
                newTodo: event.target.value
            });
        }
    }, {
        key: 'handleNewTodoKeyDown',
        value: function handleNewTodoKeyDown(event) {
            if (event.keyCode !== _config2.default.ENTER_KEY) {
                return;
            }

            event.preventDefault();

            var val = this.state.newTodo.trim();

            if (val) {
                this.props.model.addTodo(val);
                this.setState({ newTodo: '' });
            }
        }
    }, {
        key: 'toggleAll',
        value: function toggleAll(event) {
            var target = event.target;
            this.props.model.toggleAll(target.checked);
        }
    }, {
        key: 'toggle',
        value: function toggle(todoToToggle) {
            this.props.model.toggle(todoToToggle);
        }
    }, {
        key: 'destroy',
        value: function destroy(todo) {
            this.props.model.destroy(todo);
        }
    }, {
        key: 'edit',
        value: function edit(todo) {
            this.setState({
                editing: todo.id
            });
        }
    }, {
        key: 'save',
        value: function save(todoToSave, text) {
            this.props.model.save(todoToSave, text);
            this.setState({
                editing: null
            });
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.setState({
                editing: null
            });
        }
    }, {
        key: 'clearCompleted',
        value: function clearCompleted() {
            this.props.model.clearCompleted();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var footer = void 0,
                main = void 0;
            var todos = this.props.model.todos;

            var showTodos = todos.filter(function (todo) {
                switch (_this2.state.nowShowing) {
                    case _config2.default.ACTIVE:
                        return !todo.completed;
                    case _config2.default.COMPLETED:
                        return todo.completed;
                    default:
                        return true;
                }
            });

            var todoItems = showTodos.map(function (todo) {
                return _react2.default.createElement(_Item2.default, {
                    key: todo.id,
                    todo: todo,
                    onToggle: this.toggle.bind(this, todo),
                    onDestroy: this.destroy.bind(this, todo),
                    onEdit: this.edit.bind(this, todo),
                    editing: this.state.editing === todo.id,
                    onSave: this.save.bind(this, todo),
                    onCancel: this.cancel.bind(this)
                });
            }, this);

            var activeTodoCount = todos.reduce(function (accum, todo) {
                return todo.completed ? accum : accum + 1;
            }, 0);

            var completedCount = todos.length - activeTodoCount;

            if (activeTodoCount || completedCount) {
                footer = _react2.default.createElement(_Footer2.default, {
                    count: activeTodoCount,
                    completedCount: completedCount,
                    nowShowing: this.state.nowShowing,
                    onClearCompleted: this.clearCompleted.bind(this)
                });

                main = _react2.default.createElement(
                    'section',
                    { className: 'main' },
                    _react2.default.createElement('input', {
                        className: 'toggle-all',
                        type: 'checkbox',
                        onChange: this.toggleAll.bind(this),
                        checked: activeTodoCount === 0
                    }),
                    _react2.default.createElement(
                        'ul',
                        { className: 'todo-list' },
                        todoItems
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'header',
                    { className: 'header' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'todos'
                    ),
                    _react2.default.createElement('input', {
                        className: 'new-todo',
                        placeholder: 'What needs to be done?',
                        value: this.state.newTodo,
                        onKeyDown: this.handleNewTodoKeyDown.bind(this),
                        onChange: this.handleChange.bind(this),
                        autoFocus: true
                    })
                ),
                main,
                footer
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsIm5vd1Nob3dpbmciLCJBTEwiLCJlZGl0aW5nIiwibmV3VG9kbyIsInNldFN0YXRlIiwicm91dGVyIiwiYmluZCIsIkFDVElWRSIsIkNPTVBMRVRFRCIsImluaXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwia2V5Q29kZSIsIkVOVEVSX0tFWSIsInByZXZlbnREZWZhdWx0IiwidmFsIiwidHJpbSIsInByb3BzIiwibW9kZWwiLCJhZGRUb2RvIiwidG9nZ2xlQWxsIiwiY2hlY2tlZCIsInRvZG9Ub1RvZ2dsZSIsInRvZ2dsZSIsInRvZG8iLCJkZXN0cm95IiwiaWQiLCJ0b2RvVG9TYXZlIiwidGV4dCIsInNhdmUiLCJjbGVhckNvbXBsZXRlZCIsImZvb3RlciIsIm1haW4iLCJ0b2RvcyIsInNob3dUb2RvcyIsImZpbHRlciIsImNvbXBsZXRlZCIsInRvZG9JdGVtcyIsIm1hcCIsImVkaXQiLCJjYW5jZWwiLCJhY3RpdmVUb2RvQ291bnQiLCJyZWR1Y2UiLCJhY2N1bSIsImNvbXBsZXRlZENvdW50IiwibGVuZ3RoIiwiaGFuZGxlTmV3VG9kb0tleURvd24iLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7K2VBUEE7Ozs7O0lBU01BLEc7OztBQUNGLG1CQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHdCQUFZLGlCQUFPQyxHQURWO0FBRVRDLHFCQUFTLElBRkE7QUFHVEMscUJBQVM7QUFIQSxTQUFiO0FBRlU7QUFPYjs7Ozs0Q0FFbUI7QUFDaEIsZ0JBQUlDLFdBQVcsS0FBS0EsUUFBcEI7QUFBQSxnQkFDSUMsU0FBUyxzQkFBTztBQUNaLHFCQUFLRCxTQUFTRSxJQUFULENBQWMsSUFBZCxFQUFvQixFQUFDTixZQUFZLGlCQUFPQyxHQUFwQixFQUFwQixD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QUFHSSwrQkFBTyxLQUFLdkMsS0FBTCxDQUFXSSxPQUh0QjtBQUlJLG1DQUFXLEtBQUs0QyxvQkFBTCxDQUEwQnpDLElBQTFCLENBQStCLElBQS9CLENBSmY7QUFLSSxrQ0FBVSxLQUFLMEMsWUFBTCxDQUFrQjFDLElBQWxCLENBQXVCLElBQXZCLENBTGQ7QUFNSSxtQ0FBVztBQU5mO0FBRkosaUJBREo7QUFZSzJCLG9CQVpMO0FBYUtEO0FBYkwsYUFESjtBQWlCSDs7Ozs7O2tCQUdVbEMsRyIsImZpbGUiOiJtb2R1bGVzL0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IDc4NDYyIG9uIDIwMTcvNC8yMy5cclxuICovXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vLi4vZGlzdC9kaXJlY3Rvci9idWlsZC9kaXJlY3Rvcic7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBub3dTaG93aW5nOiBjb25maWcuQUxMLFxyXG4gICAgICAgICAgICBlZGl0aW5nOiBudWxsLFxyXG4gICAgICAgICAgICBuZXdUb2RvOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IHNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZSxcclxuICAgICAgICAgICAgcm91dGVyID0gUm91dGVyKHtcclxuICAgICAgICAgICAgICAgICcvJzogc2V0U3RhdGUuYmluZCh0aGlzLCB7bm93U2hvd2luZzogY29uZmlnLkFMTH0pLFxyXG4gICAgICAgICAgICAgICAgJy9hY3RpdmUnOiBzZXRTdGF0ZS5iaW5kKHRoaXMsIHtub3dTaG93aW5nOiBjb25maWcuQUNUSVZFfSksXHJcbiAgICAgICAgICAgICAgICAnL2NvbXBsZXRlZCc6IHNldFN0YXRlLmJpbmQodGhpcywge25vd1Nob3dpbmc6IGNvbmZpZy5DT01QTEVURUR9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByb3V0ZXIuaW5pdCgnLycpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBuZXdUb2RvOiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXdUb2RvS2V5RG93bihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlICE9PSBjb25maWcuRU5URVJfS0VZKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnN0YXRlLm5ld1RvZG8udHJpbSgpO1xyXG5cclxuICAgICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubW9kZWwuYWRkVG9kbyh2YWwpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuZXdUb2RvOiAnJ30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVBbGwoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHRoaXMucHJvcHMubW9kZWwudG9nZ2xlQWxsKHRhcmdldC5jaGVja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUodG9kb1RvVG9nZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5tb2RlbC50b2dnbGUodG9kb1RvVG9nZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KHRvZG8pIHtcclxuICAgICAgICB0aGlzLnByb3BzLm1vZGVsLmRlc3Ryb3kodG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdCh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVkaXRpbmc6IHRvZG8uaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKHRvZG9Ub1NhdmUsIHRleHQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm1vZGVsLnNhdmUodG9kb1RvU2F2ZSwgdGV4dCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVkaXRpbmc6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVkaXRpbmc6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm1vZGVsLmNsZWFyQ29tcGxldGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBmb290ZXIsIG1haW47XHJcbiAgICAgICAgbGV0IHRvZG9zID0gdGhpcy5wcm9wcy5tb2RlbC50b2RvcztcclxuXHJcbiAgICAgICAgbGV0IHNob3dUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT57XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5ub3dTaG93aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbmZpZy5BQ1RJVkU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0b2RvLmNvbXBsZXRlZDtcclxuICAgICAgICAgICAgICAgIGNhc2UgY29uZmlnLkNPTVBMRVRFRDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kby5jb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB0b2RvSXRlbXMgPSBzaG93VG9kb3MubWFwKGZ1bmN0aW9uKHRvZG8pe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3RvZG8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kbz17dG9kb31cclxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17dGhpcy50b2dnbGUuYmluZCh0aGlzLCB0b2RvKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkRlc3Ryb3k9e3RoaXMuZGVzdHJveS5iaW5kKHRoaXMsIHRvZG8pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRWRpdD17dGhpcy5lZGl0LmJpbmQodGhpcywgdG9kbyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdGluZz17dGhpcy5zdGF0ZS5lZGl0aW5nID09PSB0b2RvLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2F2ZT17dGhpcy5zYXZlLmJpbmQodGhpcywgdG9kbyl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuY2FuY2VsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZVRvZG9Db3VudCA9IHRvZG9zLnJlZHVjZShmdW5jdGlvbihhY2N1bSwgdG9kbykge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9kby5jb21wbGV0ZWQgPyBhY2N1bSA6IGFjY3VtICsgMTtcclxuICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsZXRlZENvdW50ID0gdG9kb3MubGVuZ3RoIC0gYWN0aXZlVG9kb0NvdW50O1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlVG9kb0NvdW50IHx8IGNvbXBsZXRlZENvdW50KSB7XHJcbiAgICAgICAgICAgIGZvb3RlciA9XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ9e2FjdGl2ZVRvZG9Db3VudH1cclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWRDb3VudD17Y29tcGxldGVkQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgbm93U2hvd2luZz17dGhpcy5zdGF0ZS5ub3dTaG93aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xlYXJDb21wbGV0ZWQ9e3RoaXMuY2xlYXJDb21wbGV0ZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAvPjtcclxuXHJcbiAgICAgICAgICAgIG1haW4gPSAoXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZ2dsZS1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b2dnbGVBbGwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YWN0aXZlVG9kb0NvdW50ID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b2RvLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvZG9JdGVtc31cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPnRvZG9zPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmV3LXRvZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdUb2RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlTmV3VG9kb0tleURvd24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAge21haW59XHJcbiAgICAgICAgICAgICAgICB7Zm9vdGVyfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19
