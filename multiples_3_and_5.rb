#!/usr/bin/env ruby
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

def getMultpiles(range)
	multiples = []
	for i in 3...range
		if i % 3 == 0 || i % 5 == 0
			multiples << i
		end
	end
	return multiples
end

def sumArray(array)
	sum = 0
	array.each { |e|  sum+=e}
	return sum
end
puts sumArray(getMultpiles(1000))

