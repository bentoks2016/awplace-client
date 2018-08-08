// 'strict'
//
// const locate = function geolocate () {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       const geolocation = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       }
//       const circle = new google.maps.Circle({
//         center: geolocation,
//         radius: position.coords.accuracy
//       })
//       autocomplete.setBounds(circle.getBounds())
//     })
//   }
// }
//
// module.exports = {
// locate
// }
