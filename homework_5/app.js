const express = require('express')
const axios = require('axios')
var app = express();
const port = 2000;


app.get("/", function (request, response) {
    response.status(200);
    response.set('content-type', 'text/html');
    response.send('hi');
    response.end();
});

app.disable('eTag');
app.set('trust proxy', true);
app.enable('case sensitive routing');
app.set('strict routing', true)
app.set('x-powered-by', false);
app.listen(port, function () {
    console.log('The server is running on port %s', port);
});

app.get('/users', (req, res) => {


    axios.get('https://randomuser.me/api/?results=10')
        .then(function (response) {
            console.log(response);
            res.status(200);
            res.set('content-type', 'application/json');
            if(response.data){
                res.send(response.data);
            }
            res.end();
        })
        .catch(function (error) {
            console.log(error);
            res.status(405);
            res.set('content-type', 'text/html');

            res.send('some error occured while getting response');
            res.end();
        });

});