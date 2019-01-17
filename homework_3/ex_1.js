const dns = require('dns');

// using simple callback
const ipAddress = dns.resolve4('www.mum.edu', function(err, addresses) {
    if(err) console.log(err);
    else console.log(addresses);
});


// using promise 
const promise = function() {
    return new Promise(function(resolve, reject) {
        dns.resolve4('www.mum.edu', function(err, addresses) {
            if(err) reject(err);
            else resolve(addresses);
            
        });
    });
    
}
promise().then(function(result){console.log(result)}, function(error) {console.log(error)});


// using async and await

(async function asyncAwaitUsingPromise() {
    try{
        const ip = await promise();
        console.log(ip);
    }catch(error ){
        console.log(error);
    }
})();



