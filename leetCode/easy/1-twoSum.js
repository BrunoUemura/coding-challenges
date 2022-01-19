/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example 1:
 *    Input: nums = [2,7,11,15], target = 9
 *    Output: [0,1]
 *    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 *    Input: nums = [3,2,4], target = 6
 *    Output: [1,2]
 *
 * Example 3:
 *    Input: nums = [3,3], target = 6
 *    Output: [0,1]
 *
 * Constraints:
 *    2 <= nums.length <= 104
 *    -109 <= nums[i] <= 109
 *    -109 <= target <= 109
 *    Only one valid answer exists.
 */

// RESOLUTION USING HASH TABLE
const twoSumHashTable = function (nums, target) {
  const map = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    // Compute the difference between the target and the current number
    const diff = target - nums[i];
    // If the hashmap contains the number, then we can return the indexes.
    // It's important to use map.hasOwnProperty instead of map[diff]. map[diff] will fail if the index value of the key diff is 0
    if (map.hasOwnProperty(diff)) {
      result = [map[diff], i];
      break;
    }
    map[nums[i]] = i;
  }
  return result;
};

console.log(twoSumHashTable([2, 7, 11, 15], 9));

// RESOLUTION USING HASH TABLE
const twoSum = function (nums, target) {
  let map = new Map();

  for (let [index, num] of nums.entries()) {
    if (map.has(target - num)) {
      return [map.get(target - num), index];
    }
    map.set(num, index);
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
