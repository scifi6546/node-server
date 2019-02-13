let file = require('./file.js');
let api = {}
api.process = function(request,response){
    console.log("api sent");
    console.log(request.url);
    if(request.url=="/api/get_files"){
        console.log("handling get_files")
        response.setHeader('Content-Type','application/json');
        console.log(api.lsFiles());
        response.end(api.lsFiles());
    }
}
//lists files in json format
api.lsFiles = function(){
    
    var files = file.readDir('');
    console.log("out");
    var out = {"files":files};
    out = JSON.stringify(out);
    console.log(out);
    console.log(typeof(out));
    return out;
}
module.exports=api;