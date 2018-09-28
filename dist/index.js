"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("core-js/modules/es6.promise");

var _;

function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return sleep(200);

          case 2:
            console.log('ok');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _main.apply(this, arguments);
}

function ax(a) {
  console.log(a);
}

_ = 10, ax(_);