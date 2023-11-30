# Phone Number Letter Combinations

This TypeScript project provides functionality to return all possible letter combinations that a phone button from 2-9 represents, similar to the classic T9 predictive text on phones.

## Features

- Generate all letter combinations for a given digit string.
- Handle inputs corresponding to numbers 2 through 9.
- Return an array of string combinations.

## Prerequisites

Before running this project, make sure you have Node.js and npm installed on your machine. This project uses TypeScript, which requires a Node.js environment.

## Getting Started

To get started with this project, clone the repository and install the dependencies.

```
git clone https://github.com/charlesalo/PROMOTEXTER-Phone-Num-Combinations.git
cd PROMOTEXTER-Phone-Num-Combinations
npm install
```

## Compiling TypeScript
The project uses TypeScript, which needs to be compiled to JavaScript before execution. To compile the project, run:
```npm run build```
This command will transpile the TypeScript code into JavaScript in the dist directory.

## Running the Application

After compilation, you can run the application using Node.js:
node dist/index.js

## Usage
To use the function, import getPhoneCombinations from the module where it is defined and pass a string of digits as the argument:

```
import { getPhoneCombinations } from './path-to-your-module';

const combinations = getPhoneCombinations("23");
console.log(combinations); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

