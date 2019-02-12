let file = {}
const fs = require('fs');
file.BaseDir = "./files/";
file.load = function(file){
	return fs.readFileSync(file,'utf8');
}

file.readDir = function(fileDir){
	var temp = fs.readdirSync(this.BaseDir+fileDir);
	console.log(temp);
	return temp;
}
module.exports = file;
//never mind
