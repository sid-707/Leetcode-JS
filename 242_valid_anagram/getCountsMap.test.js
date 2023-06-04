import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { getCountsMap } from "./getCountsMap.js";

const tests = [
  {
    s: "anagram",
    result: new Map([
      ["a", 3],
      ["n", 1],
      ["g", 1],
      ["r", 1],
      ["m", 1],
    ]),
  },
  {
    s: "nagaram",
    result: new Map([
      ["a", 3],
      ["n", 1],
      ["g", 1],
      ["r", 1],
      ["m", 1],
    ]),
  },
  {
    s: "rat",
    result: new Map([
      ["a", 1],
      ["r", 1],
      ["t", 1],
    ]),
  },
  {
    s: "car",
    result: new Map([
      ["a", 1],
      ["c", 1],
      ["r", 1],
    ]),
  },
];

tests.forEach((test) => {
  Deno.test(`When s is "${test.s}", result is ${test.result}.`, () => {
    assertEquals(getCountsMap(test.s), test.result);
  });
});
