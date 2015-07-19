// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
function findmultiples(){
	var range = prompt("Please Enter Range:", 10);		//js prompt to ask range
	var result =0;
	for (var i = 0; i < range; i++) {
		if(i % 3 === 0 || i % 5 === 0){					//chekcing if a factor of 5 or 3
			result=result+i;
		}
		console.log(result);
	}
}
findmultiples();