//Case 3 : Store prime factors of a number into an array
//Display the array
let numberToCheck = process.argv[2] 
//This function checks if a factor is prime or not
function checkIfprime(numberToCheck) {
    for (let i = 2; i <= Math.sqrt(numberToCheck); i++) {
        if (numberToCheck % i === 0)
             return false;
    }
    return true;
}
//This function Stores All prime factors in array
function storePrimesInArray(numberToCheck) {
    let primeFactorsArray = [];
    for (let i = 2; i <= numberToCheck; i++) {
        while (checkIfprime(i) && numberToCheck % i === 0) {
            primeFactorsArray.push(i);
            numberToCheck /= i;
        }
    }
    return primeFactorsArray;
}
console.log(storePrimesInArray(numberToCheck));
