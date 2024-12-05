import { factorial } from "./factorial";

describe('factorial', () => {
    it('should return 1 if n = 0', () => {
        const result = factorial(0);
        expect(result).toEqual(1);
    });

    it('should return 1 if n = 1', () => { 
        const result = factorial(1); 
        expect(result).toEqual(1); 
    });
})