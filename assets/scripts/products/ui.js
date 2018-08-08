'strict'

const store = require('../store')

const createProductSuccess = function (createProductResponse) {
  console.log('product was created here ', createProductResponse)
  $('#successfulProdCreate').toggleClass('hide').fadeOut(3000)
}

const createProductFail = function (failCreateProd) {
  console.log('sign up error is ', failCreateProd)
  $('#failedProdCreate').toggleClass('hide').fadeOut(3000)
}

const getAllProductSuccess = function (getAllProductResponse) {
  console.log('console 3')

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

const getDeleteProductSuccess = function (deleteProductResponse) {
  console.log('delete product was success ', deleteProductResponse)
  $('#successfulProdDelete').toggleClass('hide').fadeOut(3000)
}

const getDeleteProductFail = function (deleteProductFailResponse) {
  console.log('delete failed here ', deleteProductFailResponse)
  $('#failedProdDelete').toggleClass('hide').fadeOut(3000)
}

const getUpdateProductSuccess = function (updateProductResponse) {
  console.log('update was success ', updateProductResponse)
}

const getUpdateProductFail = function (updateProductFailResponse) {
  console.log('update failed here ', updateProductFailResponse)
}

const getViewProductSuccess = function (viewProductResponse) {
  console.log('view product was success ', viewProductResponse)
  $('#prod_view').html(viewProductResponse.product)
}

const getViewProductFail = function (viewProductFailResponse) {
  console.log('view product failed here ', viewProductFailResponse)
}

module.exports = {
  createProductSuccess,
  createProductFail,
  getAllProductSuccess,
  getAllProductFail,
  getDeleteProductSuccess,
  getDeleteProductFail,
  getUpdateProductSuccess,
  getUpdateProductFail,
  getViewProductSuccess,
  getViewProductFail

}
