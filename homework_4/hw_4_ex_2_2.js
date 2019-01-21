const fs = require("fs");
const path = require("path");

const readFile = ()=>{
    const data = fs.readFileSync(path.join(__dirname, 'temp.txt'), 'utf8');
    return data; 
};
process.on("message", (msg)=>{
    
    const chunks = [];
    console.log('in on message method');
    process.stdin.setEncoding('utf8');
    var readStream= fs.createReadStream(path.join(__dirname, 'temp.txt'));
    // readStream.pipe(process.stdout); // for console writing
    
    readStream.on('data', (buf) => {
        console.log(buf);
          process.send(buf.toString());
        });
        readStream.on('end', () => process.send('end'));
    // end(()=> console.log('end stream'));
    
    console.log('message function data :'+msg);

    // const data = readFile();
    // process.send(readStream);
});



// readFileAsync = function(pathName) {
//     //console.log("the Path is "+pathName);
//    fs.readFile(pathName, 'utf8', function(err, buffer) {
//      process.send(buffer);
//    });
//  };
 
//  process.on("message", pat => {
//     // console.log("me first ..."+pat);
//    var filePath = path.join(__dirname, pat);
//    readFileAsync(filePath);
//  });