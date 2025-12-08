import { describe, expect, it } from "vitest";
import { capitalize } from "~/lib/utils/helpers";

describe("Helper Utilities", () => {
  describe("capitalized func", () => {
    it("should return Hello world!", () => {
      // Arrange
      const phrase = "hello world!";

      // Act
      const result = capitalize(phrase);

      // Assert
      expect(result).toBe("Hello world!");
    });
  });
});
