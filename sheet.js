// Spreadsheets Data API spreadsheets  'wise'
import Model from 'ampersand-model'

var Google = Model.extend({
  url () {
   'https://accounts.google.com/o/oauth2/auth' + 
  },

})

// https://accounts.google.com/o/oauth2/auth?
//  scope=email%20profile&
//  state=%2Fprofile&
//  redirect_uri=https%3A%2F%2Foauth2-login-demo.appspot.com%2Foauthcallback&
//  response_type=token&
//  client_id=812741506391.apps.googleusercontent.com