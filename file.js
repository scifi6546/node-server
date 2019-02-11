let file = {}
const fs = require('fs');
file.load = function(file){
	return fs.readFileSync(file,'utf8');
}
module.exports = file;
