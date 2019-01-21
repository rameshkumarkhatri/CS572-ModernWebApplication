const express = require('express')
const axios = require('axios')
const mcache = require('memory-cache')
var app = express();
const port = 2000;


app.get("/", function (request, response) {
    response.status(200);
    response.set('content-type', 'text/html');
    response.send('hi');
    response.end();
});

app.disable('ETag');
app.set('trust proxy', true);
app.enable('case sensitive routing');
app.set('strict routing', true)
app.set('x-powered-by', false);
app.listen(port, function () {
    console.log('The server is running on port %s', port);
});






var cache = (duration) => {
    return (req, resp, next) => {
        const key = '_'+req.originalUrl||req.url;
        var cachedData = mcache.get(key);
        if(cachedData){
            res.send(cachedData);
            res.end();
            return;
        }
        next();
    };
}

const promise = function() {
    return new Promise(function(resolve, reject){
        axios.get('https://randomuser.me/api/?results=10')
        .then(function (response) {
            
            console.log('axios response'+response.data);
            resolve(response.data);
        })
        .catch(function (error) {
            console.log(error);
            reject(error);
        });

    });
}


async function getDataFromOtherServer(req, res) {
    try{
        const promiseReturned = await promise().
        // console.log('Promise returned '+promiseReturned);
        then(function(result){
                console.log('Result from Promise '+result)
                res.status(200);
                res.set('content-type', 'application/json');
                res.set('total-pages', 20);
                // res.send('hello');
                if(result){
                    res.send(result);
                }
                res.end();
            }, function(reject){
                res.status(405);
                res.set('content-type', 'text/html');
                res.send('error hi');
                res.send('some error occured while getting response 405');
                res.end();
            })
        

    }catch(err){
        console.log(err+" from catch");
        
        res.status(404);
        res.set('content-type', 'text/html');

        res.send('some error occured while getting response 404');
        res.end();
    }
};

app.get('/users', /*cache(10), */(req, res) => {
    
    
    getDataFromOtherServer(req,  res);

});
