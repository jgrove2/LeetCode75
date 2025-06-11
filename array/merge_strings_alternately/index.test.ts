import { test, expect, describe } from "bun:test";
import { mergeAlternately } from ".";

describe("mergeAlternately", () => {
  test("should merge two strings alternately", () => {
    const word1 = "abc";
    const word2 = "def";
    const result = mergeAlternately(word1, word2);
    expect(result).toBe("adbecf");
  });

  test("should handle different lengths of strings", () => {
    const word1 = "abcde";
    const word2 = "123";
    const result = mergeAlternately(word1, word2);
    expect(result).toBe("a1b2c3de");
  });

  test("should handle empty strings", () => {
    const word1 = "";
    const word2 = "xyz";
    const result = mergeAlternately(word1, word2);
    expect(result).toBe("xyz");
  });
});
