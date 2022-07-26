function solution(nums) {
  if (nums === [] || nums === null) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}

solution([1, 2, 3, 10, 5]);
