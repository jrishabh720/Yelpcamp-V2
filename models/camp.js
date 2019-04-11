var mongoose = require("mongoose");

var CampgroundSchema = new mongoose.Schema({
      name : String ,
      image : String ,
      desc : String
});
module.exports = mongoose.model("Campground",CampgroundSchema);