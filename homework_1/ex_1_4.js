const rxjs = require('rxjs');
const { from } = rxjs;
// String.prototype.filterWords = function (filterWord) {
    let string = "Here is filtered where!";
    let filterWord = ['where', 'is'];
    let result = '';
    let words = string.split(' ');
    try {
        promise = new Promise(function (resolve, reject) {

            words.map(function (word) {
                let canFilter = false;
                let fil = '';
                filterWord.map(function (filW) {
                    if (word.includes(filW)) {
                        canFilter = true;
                        fil = filW;
                    }

                    // break;
                });
                canFilter ? result += (word.replace(fil, '***') + " ") : result += word + ' ';
            }
            );
            resolve(result);
        });
    } catch (error) {
        console.log('error');
    }
    
from(promise).subscribe((e) => console.log(e));


// const subscription = obs$.subscribe(
//     function (x) { console.log(x +" jjj")},
//     function (error) {console.log(error)},
//     function () {console.log("DONE")}
// )
// console.log("Here is filtered where!".filterWords(['where', 'is']));