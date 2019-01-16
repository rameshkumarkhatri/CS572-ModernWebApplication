String.prototype.filterWords = function (filterWord) {
    let string = this;
    let result = '';
    let words = string.split(' ');

    words.map(function (word) {
        let canFilter = false;
        let fil = '';
        filterWord.map(function (filW) {
            if(word.includes(filW)) {
                canFilter = true;
                fil = filW;
            } 
            
            // break;
        });
        canFilter ? result += (word.replace(fil, '***')+" ") : result += word + ' ';
    }
    );
    return result;
}

console.log("Here is filtered where!".filterWords(['where', 'is']));