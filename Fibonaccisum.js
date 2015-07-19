// Even Fibonacci numbers
// Problem 2
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var series = [1,2];				//array with just 1 and 2
var maxvalue = 4000000;			// 4million, max value
for (var i = 1; i < maxvalue; i++) {		//if the sequence is not going to exceed 4 million, niether is our loop going to loop that many times
	var newvalue = series[i-1]+series[i];		//add to series previous two digits in the series
	if(newvalue>maxvalue){						
		break;								//break our loop on 4mil 
	}
	series.push(newvalue);					//push it to our array
};
var sum = 0;
for (var i = 0; i < series.length; i++) {
	if(series[i]%2===0){						//add even valued numbers in our array of fibonacci series
		sum= sum + series[i];
	}
};
console.log(sum);