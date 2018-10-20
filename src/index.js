import a from './importa'
import b from './requireb'

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      a();
      b();
    }, ms)
  })
}