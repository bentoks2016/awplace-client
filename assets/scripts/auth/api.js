const store = require('../store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-in',
    data: data
  })
}

const signOut = function (event) {
  console.log('this is to check for sign out & store', store)
  return $.ajax({
    method: 'DELETE',
    url: 'http://localhost:4741/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const passwordChange = function (data) {
  console.log('store is ', store)
  console.log('token is ', store.user.token)

  return $.ajax({
    method: 'PATCH',
    url: 'http://localhost:4741/change-password/:id',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  passwordChange
}
