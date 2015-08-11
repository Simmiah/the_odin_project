var primeFactors = [];
var divideMe = 13195;
var remainder = 0;

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

console.log(primeFactors);
}