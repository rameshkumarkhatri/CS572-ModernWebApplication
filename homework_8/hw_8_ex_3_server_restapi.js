const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });

const app = express();
const port = 1000;

app.use(express.json());



app.disable('ETag');
app.set('trust proxy', true);
app.enable('case sensitive routing');
app.set('strict routing', true)
app.set('x-powered-by', false);
app.listen(port, function () {
    console.log('The server is running on port %s', port);
});


let db;
app.use((req, res, next) => {
    if (!db) {
        client.connect((err) => {
            db = client.db('homework8');
            //    const collection = db.collection('homework7');
            req.db = db;
            next();

        })
    }
    else {
        req.db = db;
        next();
    }
});
app.get("/", function (request, response) {
    response.status(200);
    response.set('content-type', 'text/html');
    response.send('hi');
    response.end();
});

// data format: {name, category, location[lat, lng]}
app.post("/add_location", function (request, response) {
    response.status(200);
    response.set('content-type', 'application/json');
    console.log(request.body);
    const data = request.body;
    if (data.name && data.category && data.location) {
        const collection = db.collection('locations');
        var v = collection.save(data, function (err, record) {
            if (!err) {
                console.dir(record);
                response.json({ "success": "Record added successfull" });
            }
            else {
                response.json({ "error": "Required fields not supplied" });
                response.end();
            }
        });


    } else {
        response.json({ "error": "Required fields not supplied" });
        response.end();
    }




});

app.get("/find_nearest_mum", function (request, response) {
    response.status(200);
    response.set('content-type', 'application/json');
    console.log(request.body);


    const collection = db.collection('locations');
    collection.createIndex({location: '2d'});
    collection.find({ location: { $near: [-91.9665342, 41.017654] } }).limit(3).toArray( function (err, record) {
        if (!err) {
            response.json(record);
            response.end();
        }
        else {
            console.log(err);
            response.json({ "error": "Required not found" });
            response.end();
        }
    });
});
