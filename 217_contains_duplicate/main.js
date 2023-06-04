/**
 * @param {number[]} nums
 * @returns {boolean}
 */
export function containsDuplicate(nums) {
  const seen = new Set();

  let i;
  for (i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}
