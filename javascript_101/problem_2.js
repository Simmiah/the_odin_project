var term1 = 1;
var term2 = 2;
var term3 = 0;
var sum = 0;

while ((term1 < 4000000) && (term2 < 4000000000)) {
	if (term1 % 2 === 0) {
		sum += term1;
	}
	term3 =  term1 + term2;
	term1 = term2;
	term2 = term3;
}