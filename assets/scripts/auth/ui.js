'strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is ', signUpResponse)
  $('#successful').toggleClass('hide').fadeOut(7000)
  $('#signUpForm')[0].reset()
}

const signUpError = function (error) {
  console.log('Error in sign up is ', error)
  $('#failed').toggleClass('hide').fadeOut(3000)
  console.log('last error message')
  $('#signUpForm')[0].reset()
}

const signInSuccess = function (response) {
  console.log('this is a sign in success', response.user)
  $('#formSignUp').toggleClass('hide')
  $('#formSignOut').toggleClass('hide')
  $('#prod_body').toggleClass('hide')
  store.user = response.user
  $('#successfulSignIn').toggleClass('hide').fadeOut(3000)
  console.log(store.user)
  console.log('sing in ended here')
  $('#signInForm')[0].reset()
}

const signInError = function (error) {
  console.log('error signing in', error)
  $('#failedSignIn').toggleClass('hide').fadeOut(3000)
  $('#signUpForm')[0].reset()
}

const signOutSuccess = function (signOutResponse) {
  console.log('signOutResponse is ', signOutResponse)
  $('#formSignOut').toggleClass('hide')
  $('#formSignUp').toggleClass('hide')
  $('#prod_body').toggleClass('hide')
  $('#successfulSignOut').toggleClass('hide')
    .fadeOut(3000)
  $('#sign-out')[0].reset()
  console.log('end of sign out')
}

const signOutFailure = function () {
  console.log('Error in sign up is ')
  $('#failedSignOut').toggleClass('hide').fadeOut(3000)
  $('#sign-out')[0].reset()
}

const changePasswordSuccess = function () {
  console.log('password changed too')
  $('#successfulPassword').toggleClass('hide').fadeOut(3000)
}

const changePasswordFail = function () {
  console.log('change failed')
  $('#failedPassword').toggleClass('hide').fadeOut(3000)
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
