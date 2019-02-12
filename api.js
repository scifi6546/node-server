let api = {}
api.process = function(request,response){
    console.log("api sent");
    if(request.url=="/api/get_files"){
        response.setHeader('Content-Type','application/json');
        response.end("{\"test\":\"hello\"}");
    }
}
module.exports=api;