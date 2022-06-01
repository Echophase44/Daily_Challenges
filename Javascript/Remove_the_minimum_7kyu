function removeSmallest(numbers) {
  new_array = [...numbers];
  rating = 1000;
  location = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < rating) {
      rating = numbers[i];
      location = i;
    }
  }
  new_array.splice(location, 1);
  return new_array;
}

removeSmallest([1, 2, 3, 4, 5]);

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with a lower index.
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
