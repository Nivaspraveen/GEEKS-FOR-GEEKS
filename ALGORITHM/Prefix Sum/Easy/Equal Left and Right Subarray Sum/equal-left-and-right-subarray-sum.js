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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.equalSum(arr);
        console.log(res);

        console.log("~");
    }
}

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find equilibrium point in the array.
    equalSum(arr) {
        const totalSum = arr.reduce((a, b) => a + b, 0);
        let leftSum = 0;
        for (let i = 0; i < arr.length; i++) {
            let rightSum = totalSum - leftSum - arr[i];
            if (leftSum === rightSum) return i;
            leftSum += arr[i];
        }
        return -1;
    }
}