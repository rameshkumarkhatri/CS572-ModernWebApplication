String.prototype.filterWords = function (filterWord) {
    let string = this;
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
    return result;
}

console.log("Here is filtered where!".filterWords(['where', 'is']));