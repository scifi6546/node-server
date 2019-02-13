let file = {}
const fs = require('fs');
file.BaseDir = "./files/";
file.load = function(file){
	return fs.readFileSync(file,'utf8');
}
// I changes stuff!
file.readDir = function(fileDir){
	var temp = fs.readdirSync(this.BaseDir+fileDir);
	for(var i =0;i<temp.length;i++){
		temp[i] = String(temp[i]);
	}
	//console.log(typeof(temp));
	return temp;
}
module.exports = file;
//never mind
