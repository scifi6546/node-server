console.log("loaded!");
var html=`
<div class = file>
    {{file_name}}
</div>`;

var files;
$(document).ready(function(){start();});
function start(){
    $.getJSON("/api/get_files",function(jd){
    //alert(jd);
        files=jd.files;

        console.log(jd);
        console.log(files);
        for(var i =0;i<files.length;i++){
            console.log("appended")
            var temp = html;
            temp = temp.replace("{{file_name}}",files[i]);
            var test = $(".body").append(temp);
            console.log(test);
            //$(test).text()=files[i];
        }
    });
}