'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by 78462 on 2017/4/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Item = function (_Component) {
    _inherits(Item, _Component);

    function Item(props) {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

        _this.state = {
            editText: _this.props.todo.title
        };
        return _this;
    }

    _createClass(Item, [{
        key: 'handleSubmit',
        value: function handleSubmit() {
            var val = this.state.editText.trim();
            if (val) {
                this.props.onSave(val);
                this.setState({ editText: val });
            } else {
                this.props.onDestroy();
            }
        }
    }, {
        key: 'handleEdit',
        value: function handleEdit() {
            this.props.onEdit();
            this.setState({
                editText: this.props.todo.title
            });
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            if (event.which === _config2.default.ESCAPE_KEY) {
                this.setState({
                    editText: this.props.todo.title
                });
                this.props.onCancel(event);
            } else if (event.which === _config2.default.ENTER_KEY) {
                this.handleSubmit(event);
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            if (this.props.editing) {
                this.setState({ editText: event.target.value });
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.todo !== this.props.todo || nextProps.editing !== this.props.editing || nextState.editText !== this.state.editText;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (!prevProps.editing && this.props.editing) {
                var node = _reactDom2.default.findDOMNode(this.refs.editField);
                node.focus();
                node.setSelectionRange(node.value.length, node.value.length);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                { className: _utils2.default.classNames({
                        completed: this.props.todo.completed,
                        editing: this.props.editing
                    }) },
                _react2.default.createElement(
                    'div',
                    { className: 'view' },
                    _react2.default.createElement('input', {
                        className: 'toggle',
                        type: 'checkbox',
                        checked: this.props.todo.completed,
                        onChange: this.props.onToggle
                    }),
                    _react2.default.createElement(
                        'label',
                        { onDoubleClick: this.handleEdit.bind(this) },
                        this.props.todo.title
                    ),
                    _react2.default.createElement('button', { className: 'destroy', onClick: this.props.onDestroy })
                ),
                _react2.default.createElement('input', {
                    ref: 'editField',
                    className: 'edit',
                    value: this.state.editText,
                    onBlur: this.handleSubmit.bind(this),
                    onChange: this.handleChange.bind(this),
                    onKeyDown: this.handleKeyDown.bind(this)
                })
            );
        }
    }]);

    return Item;
}(_react.Component);

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvSXRlbS5qc3giXSwibmFtZXMiOlsiSXRlbSIsInByb3BzIiwic3RhdGUiLCJlZGl0VGV4dCIsInRvZG8iLCJ0aXRsZSIsInZhbCIsInRyaW0iLCJvblNhdmUiLCJzZXRTdGF0ZSIsIm9uRGVzdHJveSIsIm9uRWRpdCIsImV2ZW50Iiwid2hpY2giLCJFU0NBUEVfS0VZIiwib25DYW5jZWwiLCJFTlRFUl9LRVkiLCJoYW5kbGVTdWJtaXQiLCJlZGl0aW5nIiwidGFyZ2V0IiwidmFsdWUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJub2RlIiwiZmluZERPTU5vZGUiLCJyZWZzIiwiZWRpdEZpZWxkIiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImxlbmd0aCIsImNsYXNzTmFtZXMiLCJjb21wbGV0ZWQiLCJvblRvZ2dsZSIsImhhbmRsZUVkaXQiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlS2V5RG93biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFOQTs7Ozs7SUFRTUEsSTs7O0FBQ0Ysa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDVEEsS0FEUzs7QUFHZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsc0JBQVUsTUFBS0YsS0FBTCxDQUFXRyxJQUFYLENBQWdCQztBQURqQixTQUFiO0FBSGU7QUFNbEI7Ozs7dUNBRWM7QUFDWCxnQkFBSUMsTUFBTSxLQUFLSixLQUFMLENBQVdDLFFBQVgsQ0FBb0JJLElBQXBCLEVBQVY7QUFDQSxnQkFBSUQsR0FBSixFQUFTO0FBQ0wscUJBQUtMLEtBQUwsQ0FBV08sTUFBWCxDQUFrQkYsR0FBbEI7QUFDQSxxQkFBS0csUUFBTCxDQUFjLEVBQUNOLFVBQVVHLEdBQVgsRUFBZDtBQUNILGFBSEQsTUFHTztBQUNILHFCQUFLTCxLQUFMLENBQVdTLFNBQVg7QUFDSDtBQUNKOzs7cUNBRVk7QUFDVCxpQkFBS1QsS0FBTCxDQUFXVSxNQUFYO0FBQ0EsaUJBQUtGLFFBQUwsQ0FBYztBQUNWTiwwQkFBVSxLQUFLRixLQUFMLENBQVdHLElBQVgsQ0FBZ0JDO0FBRGhCLGFBQWQ7QUFHSDs7O3NDQUVhTyxLLEVBQU87QUFDakIsZ0JBQUlBLE1BQU1DLEtBQU4sS0FBZ0IsaUJBQU9DLFVBQTNCLEVBQXVDO0FBQ25DLHFCQUFLTCxRQUFMLENBQWM7QUFDVk4sOEJBQVUsS0FBS0YsS0FBTCxDQUFXRyxJQUFYLENBQWdCQztBQURoQixpQkFBZDtBQUdBLHFCQUFLSixLQUFMLENBQVdjLFFBQVgsQ0FBb0JILEtBQXBCO0FBQ0gsYUFMRCxNQUtPLElBQUlBLE1BQU1DLEtBQU4sS0FBZ0IsaUJBQU9HLFNBQTNCLEVBQXNDO0FBQ3pDLHFCQUFLQyxZQUFMLENBQWtCTCxLQUFsQjtBQUNIO0FBQ0o7OztxQ0FFWUEsSyxFQUFPO0FBQ2hCLGdCQUFJLEtBQUtYLEtBQUwsQ0FBV2lCLE9BQWYsRUFBd0I7QUFDcEIscUJBQUtULFFBQUwsQ0FBYyxFQUFDTixVQUFVUyxNQUFNTyxNQUFOLENBQWFDLEtBQXhCLEVBQWQ7QUFDSDtBQUNKOzs7OENBRXFCQyxTLEVBQVdDLFMsRUFBVztBQUN4QyxtQkFDSUQsVUFBVWpCLElBQVYsS0FBbUIsS0FBS0gsS0FBTCxDQUFXRyxJQUE5QixJQUNBaUIsVUFBVUgsT0FBVixLQUFzQixLQUFLakIsS0FBTCxDQUFXaUIsT0FEakMsSUFFQUksVUFBVW5CLFFBQVYsS0FBdUIsS0FBS0QsS0FBTCxDQUFXQyxRQUh0QztBQUtIOzs7MkNBRWtCb0IsUyxFQUFXQyxTLEVBQVc7QUFDckMsZ0JBQUksQ0FBQ0QsVUFBVUwsT0FBWCxJQUFzQixLQUFLakIsS0FBTCxDQUFXaUIsT0FBckMsRUFBOEM7QUFDMUMsb0JBQUlPLE9BQU8sbUJBQVNDLFdBQVQsQ0FBcUIsS0FBS0MsSUFBTCxDQUFVQyxTQUEvQixDQUFYO0FBQ0FILHFCQUFLSSxLQUFMO0FBQ0FKLHFCQUFLSyxpQkFBTCxDQUF1QkwsS0FBS0wsS0FBTCxDQUFXVyxNQUFsQyxFQUEwQ04sS0FBS0wsS0FBTCxDQUFXVyxNQUFyRDtBQUNIO0FBQ0o7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSSxXQUNBLGdCQUFNQyxVQUFOLENBQWlCO0FBQ2JDLG1DQUFXLEtBQUtoQyxLQUFMLENBQVdHLElBQVgsQ0FBZ0I2QixTQURkO0FBRTVCZixpQ0FBUyxLQUFLakIsS0FBTCxDQUFXaUI7QUFGUSxxQkFBakIsQ0FESjtBQU1JO0FBQUE7QUFBQSxzQkFBSyxXQUFVLE1BQWY7QUFDSTtBQUNJLG1DQUFVLFFBRGQ7QUFFSSw4QkFBSyxVQUZUO0FBR0ksaUNBQVMsS0FBS2pCLEtBQUwsQ0FBV0csSUFBWCxDQUFnQjZCLFNBSDdCO0FBSUksa0NBQVUsS0FBS2hDLEtBQUwsQ0FBV2lDO0FBSnpCLHNCQURKO0FBT0k7QUFBQTtBQUFBLDBCQUFPLGVBQWUsS0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBdEI7QUFDSyw2QkFBS25DLEtBQUwsQ0FBV0csSUFBWCxDQUFnQkM7QUFEckIscUJBUEo7QUFVSSw4REFBUSxXQUFVLFNBQWxCLEVBQTRCLFNBQVMsS0FBS0osS0FBTCxDQUFXUyxTQUFoRDtBQVZKLGlCQU5KO0FBa0JJO0FBQ0kseUJBQUksV0FEUjtBQUVJLCtCQUFVLE1BRmQ7QUFHSSwyQkFBTyxLQUFLUixLQUFMLENBQVdDLFFBSHRCO0FBSUksNEJBQVEsS0FBS2MsWUFBTCxDQUFrQm1CLElBQWxCLENBQXVCLElBQXZCLENBSlo7QUFLSSw4QkFBVSxLQUFLQyxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUxkO0FBTUksK0JBQVcsS0FBS0UsYUFBTCxDQUFtQkYsSUFBbkIsQ0FBd0IsSUFBeEI7QUFOZjtBQWxCSixhQURKO0FBNkJIOzs7Ozs7a0JBR1VwQyxJIiwiZmlsZSI6Im1vZHVsZXMvSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IDc4NDYyIG9uIDIwMTcvNC8yMy5cclxuICovXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY2xhc3MgSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZWRpdFRleHQ6IHRoaXMucHJvcHMudG9kby50aXRsZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnN0YXRlLmVkaXRUZXh0LnRyaW0oKTtcclxuICAgICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TYXZlKHZhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRUZXh0OiB2YWx9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFZGl0KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25FZGl0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVkaXRUZXh0OiB0aGlzLnByb3BzLnRvZG8udGl0bGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBjb25maWcuRVNDQVBFX0tFWSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVkaXRUZXh0OiB0aGlzLnByb3BzLnRvZG8udGl0bGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWwoZXZlbnQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IGNvbmZpZy5FTlRFUl9LRVkpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5lZGl0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRUZXh0OiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbmV4dFByb3BzLnRvZG8gIT09IHRoaXMucHJvcHMudG9kbyB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuZWRpdGluZyAhPT0gdGhpcy5wcm9wcy5lZGl0aW5nIHx8XHJcbiAgICAgICAgICAgIG5leHRTdGF0ZS5lZGl0VGV4dCAhPT0gdGhpcy5zdGF0ZS5lZGl0VGV4dFxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBpZiAoIXByZXZQcm9wcy5lZGl0aW5nICYmIHRoaXMucHJvcHMuZWRpdGluZykge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5lZGl0RmllbGQpO1xyXG4gICAgICAgICAgICBub2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2VsZWN0aW9uUmFuZ2Uobm9kZS52YWx1ZS5sZW5ndGgsIG5vZGUudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuY2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkOiB0aGlzLnByb3BzLnRvZG8uY29tcGxldGVkLFxyXG5cdFx0XHRcdFx0ZWRpdGluZzogdGhpcy5wcm9wcy5lZGl0aW5nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMudG9kby5jb21wbGV0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBvbkRvdWJsZUNsaWNrPXt0aGlzLmhhbmRsZUVkaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRvZG8udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlc3Ryb3lcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRGVzdHJveX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiZWRpdEZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lZGl0VGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW07Il19
