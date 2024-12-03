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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.maximumSumSubarray(arr, k);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        tc--;
        console.log("~");
    }
}

// User function Template for javascript

/**
 * @param {number} k
 * @param {number[]} arr
 */
class Solution {
    maximumSumSubarray(arr, k) {
        if (arr.length < k) return -1;
        let currSum = 0;
        for (let i = 0; i < k; i++) currSum += arr[i];
        let maxSum = currSum;
        for (let i = k; i < arr.length; i++) {
            currSum += arr[i] - arr[i - k];
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    }
}