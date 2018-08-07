'strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is ', signUpResponse)
}

const signUpError = function (error) {
  console.log('Error in sign up is ', error)
}

const signInSuccess = function (response) {
  console.log('this is a sign in success', response.user)
  $('#formSignUp').toggleClass('hide')
  $('#formSignOut').toggleClass('hide')
  store.user = response.user
  console.log(store.user)
}

const signInError = function (error) {
  console.log('error signing in', error)
}

const signOutSuccess = function (signOutResponse) {
  console.log('signOutResponse is ', signOutResponse)
  $('#formSignOut').toggleClass('hide')
  $('#formSignUp').toggleClass('hide')
}

const signOutFailure = function (error) {
  console.log('Error in sign up is ', error)
}

const changePasswordSuccess = function () {
  console.log('password changed too')
}

const changePasswordFail = function () {
  console.log('change failed')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFail
}
