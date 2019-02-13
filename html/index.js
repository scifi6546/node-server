console.log("loaded!");
var html=`<div class = file>Hello World</div>`;

var files;
$(document).ready(function(){start();});
function start(){
    $.getJSON("/api/get_files",function(jd){
    //alert(jd);
        files=jd.files;

        console.log(jd);

        for(var i =0;i<files.length;i++){
            $(".body").append(html);
        }
    });
}