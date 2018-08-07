'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const productApi = require('./api.js')
const productUi = require('./ui.js')

const onCreateProduct = function (event) {
  event.preventDefault()
  console.log('the form was submitted')
  // const data = {}
  const data = getFormFields(event.target)

  console.log('data is ', data)

  productApi.productCreate(data)
    .then(productUi.createProductSuccess)
    .catch(productUi.createProductFail)
}

const onGetAllProducts = function (event) {
  event.preventDefault()
  const test = 'test'
  console.log('console 1')
  productApi.prodShowAll(test)
  // .then(function (response) {
  //   console.log('response from getall products is ', response)
  // })
    .then(productUi.getAllProductSuccess)
    .catch(productUi.getAllProductError)
}

const onUpdateProduct = function (event) {
  event.preventDefault()
  console.log('console update 1')
  const data = getFormFields(event.target)
  console.log('update data is ', data)

  productApi.prodUpdate(data)

    .then(productUi.getUpdateProductSuccess)
    .catch(productUi.getUpdateProductError)
}

const onDeleteProduct = function (event) {
  event.preventDefault()
  console.log('console delete 1')
  const data = getFormFields(event.target)

  productApi.prodDelete(data.product)

    .then(productUi.getDeleteProductSuccess)
    .catch(productUi.getDeleteProductError)
}

module.exports = {
  onCreateProduct,
  onGetAllProducts,
  onUpdateProduct,
  onDeleteProduct
}
