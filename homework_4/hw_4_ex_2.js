const {Observable} = require('rxjs')

const fs = require('fs')
const http = require('http')
const {fork} = require('child_process')

const url = require('url')
const querystring = require('querystring');



var server = http.createServer((req, res) => {
    const urlParsed = url.parse(req.url);
    // urlParsed.query.search('url');
    console.log(urlParsed.query);
    let pairs = querystring.parse(urlParsed.query);
    res.writeHead(200, 
        { "Content-Type": "text/plain" 
    });

    
    if(pairs.url){
        console.log("true "+ pairs.url);

        const childProcess = fork("hw_4_ex_2_2.js");
        console.log(childProcess);
        // childProcess.send('temp.txt');

        childProcess.send("start");
        childProcess.on("message", data => {
            console.log('message '+data);
            res.write(data);
            res.end();
        })
        
    }else 
    res.end("wrong file");
}).listen(1010, console.log('server listen on 1010'))

