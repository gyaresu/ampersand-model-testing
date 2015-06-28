var Tabletop = require('tabletop')

var testURL = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html'

function onLoad(data, tabletop) {
  return data
}

var options = {
  key: testURL,
  callback: onLoad,
  simpleSheet: true
}



module.exports = Tabletop.init(options)
