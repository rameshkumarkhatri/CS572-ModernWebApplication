const { Subject } = require('rxjs')

const fs = require('fs')
const http = require('http')
const { fork } = require('child_process')

const url = require('url')
const querystring = require('querystring');

const subject = new Subject();

const forkChildProcess = function (reqresp) {
    console.log(reqresp.req.url)
    const urlParsed = url.parse(reqresp.req.url);
    // urlParsed.query.search('url');
    console.log(urlParsed.query);
    let pairs = querystring.parse(urlParsed.query);
    reqresp.res.writeHead(200,
        {
            "Content-Type": "text/plain"
        });


    // if(pairs.url){
    console.log("true " + pairs.url);

    const childProcess = fork("hw_4_ex_2_2.js");
    console.log(childProcess);
    // childProcess.send('temp.txt');

    childProcess.send("start");
    childProcess.on("message", data => {
        console.log('message ' + data);
        if (data == 'end')
            reqresp.res.end();
        else
            reqresp.res.write(data);

    })

    // }else 
    // reqresp.res.end("wrong file");
}

subject.subscribe(forkChildProcess);

var server = http.createServer((req, res) => {
    console.log('subject calling');
    // console.log(req)
    subject.next({ req: req, res: res });


}).listen(1010, console.log('server listen on 1010'))

