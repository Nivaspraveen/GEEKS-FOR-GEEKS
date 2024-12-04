'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine(), 10); // Read number of test cases
    for (let i = 0; i < t; i++) {
        const input_ar1 =
            readLine().split(' ').map(x => parseInt(x, 10)); // Parse array of integers
        const obj = new Solution();
        console.log(obj.countSubsets(input_ar1)
                        .toString()); // Convert BigInt to string for proper output
        console.log("~");
    }
}

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    countSubsets(arr) {
        let evenNum = new Set();
        for (let num of arr) {
            if (num % 2 === 0) evenNum.add(num);
        }
        let m = BigInt(evenNum.size);
        if (m === 0n) return 0;
        return (1n << m) - 1n;
    }
}