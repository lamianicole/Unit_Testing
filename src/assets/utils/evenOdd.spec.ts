import { evenOdd } from "./evenOdd";

describe('evenOdd', () => {
    it('should return [] if n = 0', () => {
        const result = evenOdd(0);
        expect(result).toEqual([]);
    });
    it('should return ["Odd", "Even"] for 2', () => {
        const result = evenOdd(2);
        expect(result).toEqual(['Odd', 'Even']);
    });
    it('should return ["Odd"] for 1', () => {
        const result = evenOdd(1);
        expect(result).toEqual(['Odd']);
    });
})

