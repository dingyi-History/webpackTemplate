var AV    = require('leanengine');
var rp    = require('request-promise');
var pangu = require('pangu');

// LeanCloud
var Application   = AV.Object.extend('Application');
var Meetup        = AV.Object.extend('Meetup');
var Speech        = AV.Object.extend('Speech');
var Speaker       = AV.Object.extend('Speaker');
var ErrorLog      = AV.Object.extend('ErrorLog');

//error handler
function outputError (error) {
    var newError = new ErrorLog();
    newError.save({
        error: error
    })
    .then(function (request) {
        console.log('an error loged')
    })
    .catch(function (err) {
        console.log('!Important: error log got an error: ' + error.code + ' : ' + error.message)
    })
}

AV.Cloud.afterSave('Application', function(appObject) {
    console.log('afterSave Application');
    var meetup = new AV.Query(Meetup);
    meetup
        .get(appObject.object.get('meetup').id)
        .then(function (m) {
            m.increment('count')
            return m.save()
        })
        .then(function (m) {
            console.log('meetup application count add 1')
        })
        .catch(outputError);
});

module.exports = AV.Cloud;
