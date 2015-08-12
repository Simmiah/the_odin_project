var primeFactors = [];
var largest = 0;

var divideMe = prompt("Input a number you want to find the largest prime factor for");
var divideMe1 = divideMe;

var isPrime = function (k) {
    for (j = 0; j < 10; j++) {
        if (k % j != 0) {
            return true;
        }
    }   
}

for (i = 0; i <= divideMe; i++) {
    if ((divideMe % i === 0) && (isPrime(i))) {
        primeFactors.push(i);
        divideMe = divideMe/i;
    }
}

for (i = 0; i < primeFactors.length; i++) {
    if (primeFactors[i] > largest) {
        largest = primeFactors[i];
    }
}

console.log(largest + " is the largest prime factor for " + divideMe1);