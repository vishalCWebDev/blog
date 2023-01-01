const body = require("body-parser");
const urlEncoder = body.urlencoded({extended:false});
const jsonEncoder = body.json();


module.exports = {
	urlEncoder : urlEncoder,
	jsonEncoder : jsonEncoder
}