var Spreadsheet = require('edit-google-spreadsheet')

var config = require('./config.json')

module.exports = Spreadsheet.load({
    debug: true,
    spreadsheetId: '153rVXCt4nlQn8Fj80GmWOLO5_aF4phW0MZrNIZfpUc8',
    worksheetId: 'o4tdc9t',

    // derived from https://github.com/jpillora/node-edit-google-spreadsheet/blob/master/get_oauth2_permissions.js
    oauth2: 
  }, function sheetReady(err, spreadsheet) {
      var data
      if (err) {
        console.error(err)
      }
      var data = spreadsheet.receive(function (e, rows, info) {
        if (e) {
          return err
        }
        data = rows
        return data
      })
    }
  )