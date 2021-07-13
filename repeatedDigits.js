//Case 5 : Store repeated digits number in range 1-100 in a array
let repeatedDigitsArray =[];
for(let i=1;i<100;i++){
    if(i%11==0)
        repeatedDigitsArray.push(i)
}
console.log(repeatedDigitsArray)