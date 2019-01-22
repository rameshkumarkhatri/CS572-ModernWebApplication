const express = require('express')
const crypto = require('crypto')

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');
var db = null;
client.connect((err) => {
     db = client.db('dbHomework7');
    // console.log(db);
    const collection = db.collection('homework7');
    collection.save({_id:1, message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"}, 
    function(err, record){
        console.log(record);
    });
    // collection.find({}, function(err, doc){
    //     if(err) console.dir(err);
    //     else console.dir(doc);
    // });
    console.dir('end');
})

var app = express();
const port = 2000;
app.listen(port, function () {
    console.log('The server is running on port %s', port);
});

const algorithm ='aes256';
const password = 'asaadsaad';
app.get('/secret/', (req, res) => {
    db.collection('homework7').findOne({}, function(err, doc){
        console.dir(doc);
        const encrypted = doc.message;
        const decipher = crypto.createDecipher(algorithm, password);
        const decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
        res.write(decrypted);
        res.end();
    });
});



