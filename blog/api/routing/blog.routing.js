const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog.controller");

router.get("/", (request, response) => {
    blogController.getAllBlogs(request, response);
});

router.get("/:category", (request, response) => {
    blogController.getBlogsCategory(request, response);
});

router.post("/", (request, response) => {
    blogController.createBlog(request, response);
});

router.put("/", (request, response) => {
    response.send("put request");
});

router.delete("/", (request, response) => {
    response.send("delete request");
});


module.exports = router;