import { areAnagrams } from "./anagrams";

describe("anagrams", () => {
    it("should return true for two empty anagrams", () => {
        const result = areAnagrams("", "");
        expect(result).toBe(true);
    });
    it("should return false for strings that are not anagrams", () => {
        const result = areAnagrams("Lamia", "Nicole");
        expect(result).toBe(false);
    });
    it("should return true for anagrams with different cases", () => {
        const result = areAnagrams("Sport", "prost");
        expect(result).toBe(true);
    });
    it("should return true for anagrams with spaces", () => {
        const result = areAnagrams("Mehl", "H elm");
        expect(result).toBe(true);
    });
    it("should return false if only one string is empty", () => {
        const result = areAnagrams("hello", "");
        expect(result).toBe(false);
    });
    it("should return false for strings with special characters", () => {
        const result = areAnagrams("Hur gar det", "Hejsan!");
        expect(result).toBe(false);
    });
    it("should return true for strings with numbers", () => {
        const result = areAnagrams("4 8 15 16 23 42", "4223161584");
        expect(result).toBe(true);
    });
});
