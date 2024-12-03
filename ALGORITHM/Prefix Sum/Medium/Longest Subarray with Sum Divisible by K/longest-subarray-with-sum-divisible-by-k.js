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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.longSubarrWthSumDivByK(arr, x);
        console.log(res);
        console.log("~");
    }
}

// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find the length of the longest subarray with sum divisible by k.
    longSubarrWthSumDivByK(arr, k) {
        const remMap = new Map();
        remMap.set(0, -1);
        let maxLength = 0, prefixSum = 0;
        for (let i = 0; i < arr.length; i++) {
            prefixSum += arr[i];
            let rem = prefixSum % k;
            if (rem < 0) rem += k;
            if (remMap.has(rem)) maxLength = Math.max(maxLength, i - remMap.get(rem));
            else remMap.set(rem, i);
        }
        return maxLength;
    }
}