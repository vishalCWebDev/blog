const express = require("express");
const server = express();
server.listen(8080);

const cors = require("./middleware/cors.middleware");
const bodyParser = require("./middleware/bodyparser.middleware");
const multer = require("./middleware/multer.middleware");

//middleware
server.use(cors);
server.use(bodyParser.urlEncoder);
server.use(bodyParser.jsonEncoder);
server.use(multer);


//require routing
const blogRouting = require("./routing/blog.routing");


//middleware route
server.use("/storage",express.static(__dirname+"/storage"));
server.use("/blog", blogRouting);