
// using timout
Array.prototype.even = function () {
    
    setTimeout( () => { console.log(this.filter (num => num%2==0))});
}

// using promise
Array.prototype.odd = function () {
    var arr = this;
    const promise = new Promise(function(resolve, reject){
        resolve(arr.filter (num => num%2!=0))
    });
    return promise;
}
console.log('Start');
[1,2,3,4,5,6,7,8].even();
var odds = [1,2,3,4,5,6,7,8].odd();
odds.then(function(result){console.log(result)}, function(error) {console.log(error)})
console.log('End');

// as setTimeout, setInterval are asynchronous
