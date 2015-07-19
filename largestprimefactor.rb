#!/usr/bin/env ruby

# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

#simple function to determine if a number is prime
def isPrime(num)
	if num % 2 == 0
		return false
	end
	max = Math.sqrt(num)
	for i in 3..max 
		if num % i == 0
			return false
		end
	end
	return true
end

def largestPrimeFactor(num)
	factors=[]
	for i in 2..Math.sqrt(num).floor
		if num % i == 0
			factors << i
		end
	end
	largestPrime = 0
	factors.each do |factor|		
		if isPrime(factor)
			if factor>largestPrime
				largestPrime=factor
			end
		end
	end
	return largestPrime
end

puts largestPrimeFactor(600851475143)

