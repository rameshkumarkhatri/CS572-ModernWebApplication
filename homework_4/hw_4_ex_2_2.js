const fs = require("fs");
const path = require("path");

const readFile = ()=>{
    const data = fs.readFileSync(path.join(__dirname, 'temp.txt'), 'utf8');
    return data; 
};
process.on("message", (msg)=>{
    
    const data = readFile();
    console.log('message function data :'+msg);
    process.send(data);
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