var _ = require('underscore')

module.exports = function (list) {
    return _.map(list, function (each) {
        return each * each
    })
}
