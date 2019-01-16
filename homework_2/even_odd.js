Array.prototype.even = function () {
    // var even = [];
    // for (const num of this)
    //     if(num%2 ==0) even.concat(num);
    // console.log(even);

    setTimeout( () => { console.log(this.filter (num => num%2==0))});
}

Array.prototype.odd = function () {
    setTimeout( () => { 
        console.log(this.filter (num => num%2!=0))});
}
console.log('Start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('End');

// as setTimeout, setInterval are asynchronous
