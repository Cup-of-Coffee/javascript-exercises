const repeatString = function(word, element) {
    let index = "";

    for(i = 0; i < element; i++){
        index += word;
    }

    if(element < 0){
        index = "ERROR";
    }
    
    return index;
}

// Do not edit below this line
module.exports = repeatString;
