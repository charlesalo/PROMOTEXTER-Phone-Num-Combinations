import { letterCombinations } from '../src/index';

describe('letterCombinations', () => {

    it('returns all combinations for the digits "23"', () => {
      // Arrange
      const input = "23";
      const expectedOutput = ["ad","ae","af","bd","be","bf","cd","ce","cf"];
  
      // Act
      const result = letterCombinations(input);
  
      // Assert
      expect(result).toEqual(expect.arrayContaining(expectedOutput));
      expect(result.length).toBe(expectedOutput.length);
    });
  
    it('returns an empty array for an empty string', () => {
      // Arrange
      const input = "";
      const expectedOutput: string[] = [];
  
      // Act
      const result = letterCombinations(input);
  
      // Assert
      expect(result).toEqual(expectedOutput);
    });
  
    it('returns all combinations for the digit "2"', () => {
      // Arrange
      const input = "2";
      const expectedOutput = ["a","b","c"];
  
      // Act
      const result = letterCombinations(input);
  
      // Assert
      expect(result).toEqual(expect.arrayContaining(expectedOutput));
      expect(result.length).toBe(expectedOutput.length);
    });
  
  });
  
