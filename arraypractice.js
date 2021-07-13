//Case 1 : Generate 10 3 digit random numbers 
//Store there numbers into an array
//Find second largest and second smallest number
let arrayOfRandomNumbers = [];
for(let i=0;i<10;i++){
    arrayOfRandomNumbers.push(Math.floor(Math.random()*(999-100+1)+100));
}
console.log(arrayOfRandomNumbers);
//Function to get second smallest number
function getSecondSmallestNumber(arrayOfRandomNumbers) {
    let lowest = 999;
    let secondLowest = 999;
    for (let i = 0; i < arrayOfRandomNumbers.length; i++) {
        if (arrayOfRandomNumbers[i] < lowest) {
            secondLowest = lowest;
            lowest = arrayOfRandomNumbers[i];
        } else if (arrayOfRandomNumbers[i] < secondLowest && arrayOfRandomNumbers[i] != lowest) {
            secondLowest = arrayOfRandomNumbers[i];
        }
    }
    return secondLowest;
}
let result = getSecondSmallestNumber(arrayOfRandomNumbers);
console.log(result);
//Function to get second largest number
function getSecondLasgestNumber(arrayOfRandomNumbers) {
    let greatest = 100;
    let secondGreatest = 100;
    for (i = 0; i < arrayOfRandomNumbers.length; i++) {
        if (arrayOfRandomNumbers[i] > greatest) {
            secondGreatest = greatest;
            greatest = arrayOfRandomNumbers[i];
        } else if (arrayOfRandomNumbers[i] > secondGreatest && arrayOfRandomNumbers[i] != greatest) {
            secondGreatest = arrayOfRandomNumbers[i];
        }
    }
    return secondGreatest;
}
let result2 = getSecondLasgestNumber(arrayOfRandomNumbers);
console.log(result2);