const multer = require("multer");
const crypto = require("crypto");
const unique_name = crypto.randomBytes(4).toString('hex');


//file uploding code
const storage = multer.diskStorage({
	destination: (request,fileInfo,callback)=>{
		callback(null,"storage/images");
	},
	filename: (request,fileInfo,callback) => {
		callback(null, `${unique_name}.png`);
	}
});

const multipart = multer({storage: storage}).single("image");

module.exports = multipart;
