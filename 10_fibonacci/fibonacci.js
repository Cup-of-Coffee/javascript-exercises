const fibonacci = function(num) {

    let newerNum = 0;
    let olderNum = 1;
    let tempNum;
    let finalNum;

    if(num === 0){
        return 0;
    };

    if(num < 0){
        return "OOPS"
    }

    for(i = 1; i < num; i++){
        tempNum = olderNum;

        olderNum = newerNum + olderNum;

        newerNum = tempNum;
    };

    return finalNum = olderNum;
};

// Do not edit below this line
module.exports = fibonacci;
