'strict'

const store = require('../store')

const createProductSuccess = function (createProductResponse) {
  console.log('product was created here ', createProductResponse)
}

const createProductFail = function (failCreateProd) {
  console.log('sign up error is ', failCreateProd)
}

const getAllProductSuccess = function (getAllProductResponse) {
  console.log('console 3')
  // console.log('getAllProductResponse is ', getAllProductResponse)
  // console.log('this is for response ', getAllProductResponse.Products)
  store.list = getAllProductResponse.products
  console.log(store.list)
  console.log('console 4')
  $('#product_display').append(store.list)
  store.list.forEach((product) => {
    $('#product_display').append(`${product.name}\n`)
  })
  console.log('console 5')
}

const getAllProductFail = function (error) {
  console.log('Error in sign up is ', error)
}

const deleteProductSuccess = function (deleteProductResponse) {
  console.log('delete product was success ', deleteProductResponse)
}

const deleteProductFail = function (deleteProductFailResponse) {
  console.log('delete failed here ', deleteProductFailResponse)
}

const updateProductSuccess = function (updateProductResponse) {
  console.log('update was success ', updateProductResponse)
}

const updateProductFail = function (updateProductFailResponse) {
  console.log('update failed here ', updateProductFailResponse)
}

module.exports = {
  createProductSuccess,
  createProductFail,
  getAllProductSuccess,
  getAllProductFail,
  deleteProductSuccess,
  deleteProductFail,
  updateProductSuccess,
  updateProductFail

}
