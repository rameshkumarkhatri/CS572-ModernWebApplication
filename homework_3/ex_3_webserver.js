const fs = require('fs');
var http = require('http');

var server  = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'video/mp4'});
    res.end(fs.readFileSync(__dirname+"/videoplayback.mp4"));
}).listen(1111, () => console.log('listening on port 1111'));


var server  = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'video/mp4'});
    fs.readFile(__dirname+"/videoplayback.mp4", function(err, data) {
       console.log("readfile "+err+"    data"+data);
        res.end(data);
    });
}).listen(1112, () => console.log('listening on port 1112'));


var server  = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'video/mp4'});
    var src = fs.createReadStream(__dirname+"/videoplayback.mp4").pipe(res);
  
}).listen(1113, () => console.log('listening on port 1113'));


// var server  = http.createServer(function(req, res) {
//     res.writeHead(200, {'content-type': 'video/mp4'});
//     var src = fs.createReadStream(__dirname+"/videoplayback.mp4");
//     src.on('data', function(data){
//         console.log('data '+(!res.write(data)));
//         if(!res.write(data))
//             src.pause();
//     });
//     res.on('drain', function(){
//         console.log('drain');
//             src.resume();
//     });

//     src.on('end', function(){
//         console.log('end');
//         res.end();
//     });
// }).listen(1110, () => console.log('listening on port 1110'));

