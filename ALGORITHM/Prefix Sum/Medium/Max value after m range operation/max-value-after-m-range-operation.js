// Initial Template for javascript
// Position this line where user code will be pasted.
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
    const t = parseInt(readLine(), 10); // Read the number of test cases
    const solution = new Solution();    // Create an instance of Solution

    for (let i = 0; i < t; i++) {
        const n = parseInt(readLine(), 10); // Read the size of the array

        // Read array a
        const a = readLine().split(' ').map(Number);

        // Read array b
        const b = readLine().split(' ').map(Number);

        // Read array k
        const k = readLine().split(' ').map(Number);

        // Call the findMax method and print the result
        console.log(solution.findMax(n, a, b, k));
        console.log("~");
    }
}

// User function Template for javascript
class Solution {
    findMax(n, a, b, k) {
        const diff = new Array(n + 1).fill(0);
        for (let i = 0; i < a.length; i++) {
            diff[a[i]] += k[i];
            if (b[i] + 1 < n) diff[b[i] + 1] -= k[i];
        }
        
        let maxValue = 0, currSum = 0;
        for (let i = 0; i < n; i++) {
            currSum += diff[i];
            maxValue = Math.max(maxValue, currSum);
        }
        return maxValue;
    }
}
