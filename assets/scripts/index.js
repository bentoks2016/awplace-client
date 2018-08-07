'use strict'

const authEvents = require('./auth/events')
const prodEvents = require('./products/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#signUpForm').on('submit', authEvents.onSignUp)
  $('#signInForm').on('submit', authEvents.onSignIn)
  $('#password_change').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create_product').on('submit', prodEvents.onCreateProduct)
  $('#show_products').on('click', prodEvents.onGetAllProducts)
  $('#update_product').on('submit', prodEvents.onUpdateProduct)
  $('#delete_product').on('submit', prodEvents.onDeleteProduct)
  $('#view_product').on('submit', prodEvents.onViewProduct)
})
