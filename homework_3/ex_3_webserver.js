const fs = require('fs');
var http = require('http');

var server  = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'video/mp4'});
    res.write(fs.readFileSync(__dirname+"/video.mp4"));
}).listen(1111, () => console.log('listening on port 1111'));


var server  = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'video/mp4'});
    // console.log(__dirname+"/videoplayback.mp4")
    fs.readFile(__dirname+"/video.mp4", function(err, data) {
        if(err) throw err;
       console.log("readfile "+err+"    data"+data);
       
        res.end(data);
        
    });
    // res.end()
}).listen(1112, () => console.log('listening on port 1112'));


var server  = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'video/mp4'});
    var src = fs.createReadStream(__dirname+"/videoplayback.mp4").pipe(res);
  
}).listen(1113, () => console.log('listening on port 1113'));



// As the readFileSync work fine, but the readFile take too much time to read async and write buffer
// then show to user and user needs to wait
// createReadStream is showing a stream.

// As readFile is not good for the long files.





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

