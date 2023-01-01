const mongo = require("mongoose")
const { Schema } = mongo;

const blogSchema = new Schema({
	title: {
		type: String,
		unique: true,
		required: [true, "Title field is required"]
	},
	category: String,
	image: String,
	content: {
		type: String,
		required : [true, "Content field is required"]
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongo.model("Blog",blogSchema);
