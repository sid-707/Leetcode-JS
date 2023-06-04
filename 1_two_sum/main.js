/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
export function twoSum(nums, target) {
  const seen = new Map();

  let i;
  for (i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (seen.has(diff)) {
      return [seen.get(diff), i];
    }

    seen.set(num, i);
  }
}
