var primeFactors = [];
var divideMe = 600851475143;
var divideMe1 = 600851475143;
var remainder = 0;
var largest = 0;

var isPrime = function (k) {
    for (j = 0; j < 10; j++) {
        if (k % j != 0) {
            return true;
        }
    }   
}

var isDivisible = function (l,m) {
    if (l % m === 0) {
        return true;
    }
}

for (i = 0; i <= divideMe; i++) {
    if (isDivisible(divideMe, i)) {
        if (isPrime(i)) {
            primeFactors.push(i);
            remainder = divideMe/i;
        }
        divideMe = remainder;
    }
}

for (i = 0; i < primeFactors.length; i++) {
    if (primeFactors[i] > largest) {
        largest = primeFactors[i];
    }
}

console.log(largest + " is the largest prime factor for " + divideMe1);