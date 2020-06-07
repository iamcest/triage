var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb://heroku_r379skr8:s4hi3ihk6cd9vlrkt5if8lq2lo@ds133814.mlab.com:33814/heroku_r379skr8");
//mongoose.connect("mongodb://admin:admin123@ds145220.mlab.com:45220/nhs-app");

module.exports = {mongoose};
