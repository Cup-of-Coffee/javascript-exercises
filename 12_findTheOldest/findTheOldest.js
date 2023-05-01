const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currentPerson) => {
        if(!oldestPerson.yearOfDeath){
            oldestPerson.yearOfDeath = new Date().getFullYear();
        }
        let oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;        

        if(!currentPerson.yearOfDeath){
            currentPerson.yearOfDeath = new Date().getFullYear();
        }
        let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;   

        return oldestAge < currentAge ? currentPerson : oldestPerson;

    });
};

// Do not edit below this line
module.exports = findTheOldest;
