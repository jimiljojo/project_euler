#!/usr/bin/env ruby
# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

# simple function that returns true if the number passed as param is prime
series = [1,2]
newvalue = 0
sum = 0
range = 4000000
for i in 3..range
	newvalue = series[i-3]+series[i-2]
	break if newvalue > range
	series<<newvalue
end 
series.each do |num|
	if num % 2== 0
		sum+=num
	end
end
puts sum
