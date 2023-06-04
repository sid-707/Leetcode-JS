import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { twoSum } from "./main.js";

const tests = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    result: [0, 1],
  },
  {
    nums: [3, 2, 4],
    target: 6,
    result: [1, 2],
  },
  {
    nums: [3, 3],
    target: 6,
    result: [0, 1],
  },
];

tests.forEach((test) => {
  Deno.test(
    `When nums is [${test.nums}] and target is ${test.target}, result is [${test.result}].`,
    () => {
      assertEquals(twoSum(test.nums, test.target), test.result);
    }
  );
});
