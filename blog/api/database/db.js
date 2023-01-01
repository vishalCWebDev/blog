const { query } = require("express");
const mongo = require("mongoose");
const blogSchema = require("../model/blog.model");

const option = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongo.connect("mongodb://localhost:27017/blogwap",option);

const createData = async (data) => {
	const collection = new blogSchema(data);
	const dataRes = await collection.save();
	return dataRes;
}

const getAll = async () => {
	const data = await blogSchema.find();
	return data;
}

const getByQuery = async (query) => {
	const dataRes = await blogSchema.find(query);
	return dataRes;
}

module.exports = {
	 createData,
	 getAll,
	 getByQuery
}
