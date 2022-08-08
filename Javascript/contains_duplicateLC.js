var containsDuplicate = function (nums) {
  const result = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (result.has(nums[i]) === true) {
      return true;
    }
    result.add(nums[i]);
  }
  return false;
};

containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
