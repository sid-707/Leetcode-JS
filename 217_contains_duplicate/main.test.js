import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { containsDuplicate } from "./main.js";

const tests = [
  {
    nums: [1, 2, 3, 1],
    result: true,
  },
  {
    nums: [1, 2, 3, 4],
    result: false,
  },
  {
    nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
    result: true,
  },
];

tests.forEach((test) => {
  Deno.test(
    `When nums is [${test.nums}] and target is ${test.target}, result is ${test.result}.`,
    () => {
      assertEquals(containsDuplicate(test.nums), test.result);
    }
  );
});
