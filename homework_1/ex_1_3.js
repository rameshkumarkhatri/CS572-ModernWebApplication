filterFunc = function(words, filterWord) {
    let result = '';
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
    return result;
}

String.prototype.filterWords = async function (filterWord) {
    let string = this;
    let result = '';
    let words = string.split(' ');
    try {
          result = await filterFunc(words, filterWord);
          console.log(result);
    } catch (error) {
        console.log('error '+error);
    }
    
    return result;
}

// console.log(
    "Here is filtered where!".filterWords(['where', 'is'])
    // );