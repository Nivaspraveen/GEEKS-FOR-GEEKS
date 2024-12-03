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
        // let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.minSwap(arr, k);
        if (res === -0) res = 0;
        console.log(res);

        console.log("~");
    }
}

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {

    minSwap(arr, k) {
        let countK = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= k) countK++;
        }
        
        let bad = 0;
        for (let i = 0; i < countK; i++) {
            if (arr[i] > k) bad++;
        }
        
        let minSwaps = bad;
        for (let i = countK; i < arr.length; i++) {
            if (arr[i] > k) bad++;
            if (arr[i - countK] > k) bad--;
            minSwaps = Math.min(minSwaps, bad);
        }
        return minSwaps;
    }
}