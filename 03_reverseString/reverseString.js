const reverseString = function(word) {

    let holder = [];
    let wordLength = word.length;

    for(i = 0; i < wordLength; i++){
        holder[i] = word[wordLength - (i+1)];
    }

    return holder.join("");
};

// Do not edit below this line
module.exports = reverseString;
