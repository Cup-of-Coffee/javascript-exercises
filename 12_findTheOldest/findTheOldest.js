const findTheOldest = function(array) {

    let peopleArray = array.map(yearOfBirth => yearOfBirth)
    let oldestAge = 0;
    let oldestPerson = "";
    let actualAge;
    let currentYear = new Date().getFullYear;

    for(i = 0; i < array.length; i++){
        let birthYear = array[i][yearOfBirth];
        if(!(array[i][yearOfDeath])){
            actualAge = currentYear - birthYear;
        }else{
            actualAge = yearOfDeath - birthYear;
        }

        if(oldestAge < actualAge){
            oldestAge = actualAge;
            oldestPerson = array[i][name]
        }
    }

    return highestNum;
};

// Do not edit below this line
module.exports = findTheOldest;
