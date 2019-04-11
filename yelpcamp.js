var express = require("express");
var app = express();
var mongoose = require('mongoose'),
    seeds = require('./seeds');
mongoose.connect("mongodb://localhost:27017/YourDB", {
  useNewUrlParser: true
});
var body = require('body-parser');
app.use(body.urlencoded({
  extended: true
}));
app.use(express.static("Public"));
app.set("view engine", "ejs");

var Campground = require("./models/camp");

// var CampgroundSchema = new mongoose.Schema({
//       name : String ,
//       image : String ,
//       desc : String
// });
// var Campground = mongoose.model("Campground",CampgroundSchema);
app.get("/", function(req, res) {
  res.render("landing");
});
app.get("/campground", function(req, res) {
  Campground.find({},function( err , allCampground)
{
  if(err)
  {
    console.log("err");
  }else{
    res.render("campground", {
      campground: allCampground
    });
  }
});
});

app.post("/campground", function(req, res) {
  var name1 = req.body.name;
  var image1 = req.body.image;
  var desc1 = req.body.desc
  var newcamp = {
    name: name1,
    image: image1,
    desc: desc1
  };
  Campground.create(newcamp,function(err,newcamp){
    if(err){
      console.log(err);
    }else{
      res.redirect("/campground");
      console.log(newcamp);
    }
  });
});

app.get("/campground/new", function(req, res) {
  res.render("new");
});
app.get("/campground/:id",function(req,res){
   // res.render("show");
   Campground.findById(req.params.id,function(err,Campground){
     if(err){
       console.log(err);
     }else{
       res.render("show",{ campgrounds : Campground});
     }
   });
});
app.listen(3000, function() {
  console.log("Hey Your Server is Started");
});
// db."name of collection".remove({ "property" : "property eqivelence and it must be in the double quotes"})
