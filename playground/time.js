var moment = require('moment');

// var date = new Date();
// 10:35 am
//
// var date = moment();
//
// console.log(date.format('MMM Do YYYY  h:mm'));

var createdAt = 1000;
var date = moment(createdAt);
console.log(date.format('MMM do YYYY h:mm a'));
