var webp=require('webp-converter');
var express=require('express');
var app=express();
var fs=require('fs');
app.get('/images',function(request,response){
fs.readFile(__dirname + "/" + "result.webp",function(err,data){
const result = webp.cwebp("test.jpg","result.webp","-q 80",logging="-v");
result.then((response) => {
 console.log(data);
});
response.end(data);
});
})
app.get('/images/gif',function(request,response){
fs.readFile(__dirname + "/" + "result_gif.webp",function(err,data){
const webp=require('webp-converter');
const result = webp.gwebp("test2.gif","result_gif.webp","-q 80",logging="-v");
result.then((response) => {
console.log(response);
});
response.end(data);
});
})
var server=app.listen(5051,function(){
var host=server.address().address
var port=server.address().port
console.log('RestFull Server Listening at http://%s:%s',host,port)
})