const palindromes = function (word) {  
    const flipped = word.toLowerCase().replace(/[^a-z]/g,"");

    return (flipped.split("").reverse().join("")) == flipped;
};

// Do not edit below this line
module.exports = palindromes;
