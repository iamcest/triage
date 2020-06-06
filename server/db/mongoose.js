var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb://iamcest:Mongodb2020@ds251845.mlab.com:51845/heroku_rjf1r3kn
// mongoose.connect("mongodb://admin:admin123@ds145220.mlab.com:45220/nhs-app");

module.exports = {mongoose};
