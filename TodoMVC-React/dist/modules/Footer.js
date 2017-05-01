'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by 78462 on 2017/4/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            var count = this.props.count,
                activeTodoWord = _utils2.default.pluralize(count, 'item'),
                selected = this.props.nowShowing,
                clearButton = this.props.completedCount <= 0 ? null : _react2.default.createElement(
                'button',
                {
                    className: 'clear-completed',
                    onClick: this.props.onClearCompleted },
                'Clear completed'
            );

            return _react2.default.createElement(
                'footer',
                { className: 'footer' },
                _react2.default.createElement(
                    'span',
                    { className: 'todo-count' },
                    _react2.default.createElement(
                        'strong',
                        null,
                        count
                    ),
                    ' ',
                    activeTodoWord,
                    ' left'
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'filters' },
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'a',
                            {
                                href: '#/',
                                className: selected === _config2.default.ALL ? 'selected' : '' },
                            'All'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'a',
                            {
                                href: '#/active',
                                className: selected === _config2.default.ACTIVE ? 'selected' : '' },
                            'Active'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'a',
                            {
                                href: '#/completed',
                                className: selected === _config2.default.COMPLETED ? 'selected' : '' },
                            'Completed'
                        )
                    )
                ),
                clearButton
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvRm9vdGVyLmpzeCJdLCJuYW1lcyI6WyJGb290ZXIiLCJjb3VudCIsInByb3BzIiwiYWN0aXZlVG9kb1dvcmQiLCJwbHVyYWxpemUiLCJzZWxlY3RlZCIsIm5vd1Nob3dpbmciLCJjbGVhckJ1dHRvbiIsImNvbXBsZXRlZENvdW50Iiwib25DbGVhckNvbXBsZXRlZCIsIkFMTCIsIkFDVElWRSIsIkNPTVBMRVRFRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBTEE7Ozs7O0lBT01BLE07Ozs7Ozs7Ozs7O2lDQUVPO0FBQ0wsZ0JBQUlDLFFBQVEsS0FBS0MsS0FBTCxDQUFXRCxLQUF2QjtBQUFBLGdCQUNJRSxpQkFBaUIsZ0JBQU1DLFNBQU4sQ0FBZ0JILEtBQWhCLEVBQXVCLE1BQXZCLENBRHJCO0FBQUEsZ0JBRUlJLFdBQVcsS0FBS0gsS0FBTCxDQUFXSSxVQUYxQjtBQUFBLGdCQUdJQyxjQUFjLEtBQUtMLEtBQUwsQ0FBV00sY0FBWCxJQUE2QixDQUE3QixHQUFpQyxJQUFqQyxHQUNWO0FBQUE7QUFBQTtBQUNJLCtCQUFVLGlCQURkO0FBRUksNkJBQVMsS0FBS04sS0FBTCxDQUFXTyxnQkFGeEI7QUFBQTtBQUFBLGFBSlI7O0FBV0EsbUJBQ0k7QUFBQTtBQUFBLGtCQUFRLFdBQVUsUUFBbEI7QUFDUDtBQUFBO0FBQUEsc0JBQU0sV0FBVSxZQUFoQjtBQUNDO0FBQUE7QUFBQTtBQUFTUjtBQUFULHFCQUREO0FBQUE7QUFDMkJFLGtDQUQzQjtBQUFBO0FBQUEsaUJBRE87QUFJSTtBQUFBO0FBQUEsc0JBQUksV0FBVSxTQUFkO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksc0NBQUssSUFEVDtBQUVJLDJDQUFXRSxhQUFhLGlCQUFPSyxHQUFwQixHQUEwQixVQUExQixHQUF1QyxFQUZ0RDtBQUFBO0FBQUE7QUFESixxQkFESjtBQVFJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJLHNDQUFLLFVBRFQ7QUFFSSwyQ0FBV0wsYUFBYSxpQkFBT00sTUFBcEIsR0FBNkIsVUFBN0IsR0FBMEMsRUFGekQ7QUFBQTtBQUFBO0FBREoscUJBUko7QUFlSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSSxzQ0FBSyxhQURUO0FBRUksMkNBQVdOLGFBQWEsaUJBQU9PLFNBQXBCLEdBQWdDLFVBQWhDLEdBQTZDLEVBRjVEO0FBQUE7QUFBQTtBQURKO0FBZkosaUJBSko7QUEyQktMO0FBM0JMLGFBREo7QUErQkg7Ozs7OztrQkFHVVAsTSIsImZpbGUiOiJtb2R1bGVzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IDc4NDYyIG9uIDIwMTcvNC8yNC5cclxuICovXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgY291bnQgPSB0aGlzLnByb3BzLmNvdW50LFxyXG4gICAgICAgICAgICBhY3RpdmVUb2RvV29yZCA9IHV0aWxzLnBsdXJhbGl6ZShjb3VudCwgJ2l0ZW0nKSxcclxuICAgICAgICAgICAgc2VsZWN0ZWQgPSB0aGlzLnByb3BzLm5vd1Nob3dpbmcsXHJcbiAgICAgICAgICAgIGNsZWFyQnV0dG9uID0gdGhpcy5wcm9wcy5jb21wbGV0ZWRDb3VudCA8PSAwID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhci1jb21wbGV0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGVhckNvbXBsZXRlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xlYXIgY29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRvZG8tY291bnRcIj5cclxuXHRcdFx0XHRcdFx0PHN0cm9uZz57Y291bnR9PC9zdHJvbmc+IHthY3RpdmVUb2RvV29yZH0gbGVmdFxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZpbHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiIy9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RlZCA9PT0gY29uZmlnLkFMTCA/ICdzZWxlY3RlZCcgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMvYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0ZWQgPT09IGNvbmZpZy5BQ1RJVkUgPyAnc2VsZWN0ZWQnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjL2NvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkID09PSBjb25maWcuQ09NUExFVEVEID8gJ3NlbGVjdGVkJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICB7Y2xlYXJCdXR0b259XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXX0=
