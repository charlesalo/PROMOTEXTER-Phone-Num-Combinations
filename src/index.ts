function getPhoneCombinations(digits: string): string[] {
    if (digits.length === 0) return [];
    
    const digitToChar: { [digit: string]: string[] } = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      // ... fill in the rest of the digits
    };
    
    const result: string[] = [];
    
    function backtrack(combination: string, next_digits: string) {
      if (next_digits.length === 0) {
        result.push(combination);
      } else {
        let digit = next_digits.substring(0, 1);
        for (let char of digitToChar[digit]) {
          backtrack(combination + char, next_digits.substring(1));
        }
      }
    }
    
    backtrack('', digits);
    return result;
  }
  
  console.log(getPhoneCombinations("23"));
  