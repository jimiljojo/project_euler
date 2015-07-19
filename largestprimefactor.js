// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

//simple function that returns true if the number passed as param is prime
function isPrime(number) { 
    if (number % 2 === 0){
        return false;
    }
    var max = Math.sqrt(number);
    for (i=3; i<=max; i+=2) {
        if (number % i === 0) {
            return false;
        }
    }
 return true;
};

var number = 600851475143;
var factors=[];
for (i=2; i<=Math.floor(Math.sqrt(number)); i++) {          //Caculaton all the factors of the number and pushing them to an array
    if (number % i === 0) {
        factors.push(i);
    }
}

var largestPrime=0;

for (var i = 0; i < factors.length; i++) {
	if(isPrime(factors[i])===true){                        //Getting the prime factors from our array using our function defined before and finding the max number
		console.log(isPrime(factors[i]));
		if(factors[i]>largestPrime){
			largestPrime = factors[i];
		}
	}
};

console.log(largestPrime);