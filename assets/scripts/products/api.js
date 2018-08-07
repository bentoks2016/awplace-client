const config = require('../config.js')
const store = require('../store.js')

const productCreate = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/products',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  }
  )
}

const prodShowAll = function (test) {
  console.log('console 2')
  console.log('test is ', test)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/products',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const prodUpdate = function (data) {
  console.log('console update 2')
  console.log('data for update is ', data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/products/${data.product.id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const prodDelete = function (product) {
  console.log('console delete 2')
  console.log('id is ', product)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/products/${product.id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const prodView = function (product) {
  console.log('this is one product View')
  console.log('view product is ', product)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/products/${product.id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  productCreate,
  prodShowAll,
  prodDelete,
  prodUpdate,
  prodView
}
