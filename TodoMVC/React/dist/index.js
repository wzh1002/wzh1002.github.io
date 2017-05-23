'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _App = require('./modules/App');

var _App2 = _interopRequireDefault(_App);

var _Model = require('./modules/Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by 78462 on 2017/4/23.
 */
var model = new _Model2.default('react-todos');

var init = function init() {
    (0, _reactDom.render)(_react2.default.createElement(_App2.default, { model: model }), document.getElementsByClassName('todoapp')[0]);
};

model.subscribe(init);

init();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZGVsIiwiaW5pdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN1YnNjcmliZSJdLCJtYXBwaW5ncyI6Ijs7QUFHQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQU5BOzs7QUFRQSxJQUFJQSxRQUFRLG9CQUFVLGFBQVYsQ0FBWjs7QUFFQSxJQUFJQyxPQUFPLFNBQVBBLElBQU8sR0FBVztBQUNsQiwwQkFDSSwrQ0FBSyxPQUFPRCxLQUFaLEdBREosRUFFSUUsU0FBU0Msc0JBQVQsQ0FBZ0MsU0FBaEMsRUFBMkMsQ0FBM0MsQ0FGSjtBQUlILENBTEQ7O0FBT0FILE1BQU1JLFNBQU4sQ0FBZ0JILElBQWhCOztBQUVBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IDc4NDYyIG9uIDIwMTcvNC8yMy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9tb2R1bGVzL0FwcCc7XHJcbmltcG9ydCBNb2RlbCBmcm9tICcuL21vZHVsZXMvTW9kZWwnO1xyXG5cclxubGV0IG1vZGVsID0gbmV3IE1vZGVsKCdyZWFjdC10b2RvcycpO1xyXG5cclxubGV0IGluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHJlbmRlcihcclxuICAgICAgICA8QXBwIG1vZGVsPXttb2RlbH0vPixcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvYXBwJylbMF1cclxuICAgICk7XHJcbn07XHJcblxyXG5tb2RlbC5zdWJzY3JpYmUoaW5pdCk7XHJcblxyXG5pbml0KCk7XHJcblxyXG4iXX0=
