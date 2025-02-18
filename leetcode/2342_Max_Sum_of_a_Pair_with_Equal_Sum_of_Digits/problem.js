/* You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

 

Example 1:

Input: nums = [18,43,36,13,7]
Output: 54
Explanation: The pairs (i, j) that satisfy the conditions are:
- (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
- (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
So the maximum sum that we can obtain is 54.
Example 2:

Input: nums = [10,12,19,14]
Output: -1
Explanation: There are no two numbers that satisfy the conditions, so we return -1.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  if (nums.length >= 2) {
  const numsAry = nums.map((num, index) => {
    return {
      key: num
        .toString()
        .split("")
        .reduce((acc, val) => acc + parseInt(val), 0),
      value: index,
    };
  });
  
  numsAry.forEach(num => {
    console.log("key: " + num.key + " value: " + num.value);
  });

  let currentHighestKey = numsAry[0].key;
  let secondHighestKey = numsAry[0].key;
  let currentHighestValue = numsAry[0].value;
  let secondHighestValue = numsAry[0].value;

  for (let i = 1; i < numsAry.length; i++) {
    if (numsAry[i].key > currentHighestKey) {
      console.log("here");
      currentHighestKey = numsAry[i].key;
      currentHighestKey = numsAry[i].value;
    } else if (numsAry[i].key === currentHighestKey) {
      console.log("There");
      secondHighestKey = numsAry[i].key;
      secondHighestValue = numsAry[i].value;
    }
  }
  console.log("currentHighestKey: " + currentHighestKey + " secondHighestKey: " + secondHighestKey);
  console.log("currentHighestValue: " + currentHighestValue + " secondHighestValue: " + secondHighestValue);
  if (currentHighestKey !== secondHighestKey) {

    return -1;
  } else {
    const val1 = nums[currentHighestValue];
    const val2 = nums[secondHighestValue];
    return parseInt(val1) + parseInt(val2);
  }
  } else {
    return -1;
  }
};

// nums = [18, 43, 36, 13, 7];
nums = [4,6,10,6];
console.log("ansewr is " + maximumSum(nums)); // 54
