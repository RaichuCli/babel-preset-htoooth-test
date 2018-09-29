"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

function sleep(ms) {
  return new _promise.default(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}