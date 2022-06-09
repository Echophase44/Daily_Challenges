function squareSum(numbers){
  sum = 0
  for(i = 0; i < numbers.length; i++){
    sum += Math.pow(numbers[i], 2)
  }
  return sum
}

squareSum([1,2])

Complete the square sum function so that it squares each number passed into it and then sums the results together.