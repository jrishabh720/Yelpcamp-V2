var mongoose = require("mongoose"),
	campground = require("./models/camp");

campground.remove({},function(err){
	if(err){
		console.log(err);
	}else{
		console.log("All Data is Removed");
	}
});