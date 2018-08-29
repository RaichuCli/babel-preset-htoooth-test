
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

async function main() {
  await sleep(200)
  console.log('ok')
}


function ax(a) {
  console.log(a)
}

10 |> ax