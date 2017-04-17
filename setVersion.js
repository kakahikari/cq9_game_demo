let fs = require('fs')

let setVersion = (_version) => {
  const content = `export const _VERSION = '${_version}'\n`
  fs.writeFile('src/version.js', content, 'utf-8', (err) => {
    if (err) throw err
    console.log(`
      ******************************
        > _VERSION: ${_version}
      ******************************
    `)
  })
}

let readPackage = () => {
  const packageText = fs.readFileSync('./package.json', 'utf8')
  const pJson = JSON.parse(packageText).version.toString() || 'none'
  setVersion(pJson)
}

readPackage()
