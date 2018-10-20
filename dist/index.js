import "core-js/modules/es6.promise";
import a from './importa';
import b from './requireb';

function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
      a();
      b();
    }, ms);
  });
}