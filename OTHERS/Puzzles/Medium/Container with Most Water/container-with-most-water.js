// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(
            x => parseInt(x)); // Read and split input into an array
        let obj = new Solution();
        console.log(obj.maxArea(arr)); // Use the array directly

        console.log("~");
    }
}

// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxArea(arr) {
        let left = 0, right = arr.length - 1, maxArea = 0;
        while (left < right) {
            const height = Math.min(arr[left], arr[right]),
                width = right - left, area = height * width;
            maxArea = Math.max(maxArea, area);
            arr[left] < arr[right] ? left++ : right--;
        }
        return maxArea;
    }
}