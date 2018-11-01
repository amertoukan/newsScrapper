var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var model = new mongoose.Schema({
	title: {
		type: String, 
	},
	imgLink: {
		type: String, 
	},	
	storyLink: {
		type: String, 
	},
	summary: {
		type: String, 
	},		
	createdAt: {
		type: Date, 
		default: Date.now
	}
});
// This creates our model from the above schema, using mongoose's model method
const Articles = mongoose.model("Articles", model);

// Export the Articles model
module.exports = Articles;
