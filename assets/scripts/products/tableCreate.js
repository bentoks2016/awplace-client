'strict'
// CREATE html table from JSON
const tableCreate = function (json) {
  // establish which keys to take data from
  let bodyRows = ''

  // loop through array to create rows
  for (let i = 0; i < json.length; i++) {
    bodyRows += '<tr>'
    // bodyRows += '<td><button type="button" class="btn-line clickable">View details</button></td>'
    bodyRows += '<td class="product-list-id" >' + json[i].id + '</td>'
    bodyRows += '<td>' + json[i].name + '</td>'
    bodyRows += '<td>' + json[i].price + '</td>'
    bodyRows += '<td>' + json[i].description + '</td>'
    bodyRows += '<td>' + json[i].location + '</td>'

  }
  return bodyRows
}

module.exports = {
  tableCreate
}
