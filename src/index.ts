export function letterCombinations(digits: string): string[] {
    if (digits.length === 0) {
      return [];
    }
  
    const digitMap: { [key: string]: string } = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
    };
  
    const result: string[] = [];
  
    function generateCombinations(index: number, currentCombination: string): void {
      if (index === digits.length) {
        result.push(currentCombination);
        return;
      }
  
      const currentDigit = digits[index];
      const letters = digitMap[currentDigit];
  
      for (const letter of letters) {
        generateCombinations(index + 1, currentCombination + letter);
      }
    }
  
    generateCombinations(0, '');
  
    return result;
  }
  
  // Example Usage:
  console.log(letterCombinations('23'));
  // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
  
  console.log(letterCombinations(''));
  // Output: []
  
  console.log(letterCombinations('2'));
  // Output: ["a","b","c"]  