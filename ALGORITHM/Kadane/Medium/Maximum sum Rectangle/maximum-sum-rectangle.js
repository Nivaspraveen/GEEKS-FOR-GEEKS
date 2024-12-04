// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        let [R, C] = readLine().trim().split(" ").map((x) => parseInt(x));
        let M = [];
        for (let j = 0; j < R; j++) {
            let inputLine = readLine().trim().split(" ").map((x) => parseInt(x));
            M.push(inputLine);
        }
        let obj = new Solution();
        let res = obj.maximumSumRectangle(M);
        console.log(res);
    }
}

// User function Template for javascript

/**
 * @param {number} R
 * @param {number} C
 * @param {number[]} M
 * @return {number}
 */

class Solution {
    // Helper function: Kadane's Algorithm to find max sum subarray
    kadane(arr) {
        let maxEnd = arr[0], maxFar = arr[0];
        for (let i = 1; i < arr.length; i++) {
            maxEnd = Math.max(arr[i], maxEnd + arr[i]);
            maxFar = Math.max(maxFar, maxEnd);
        }
        return maxFar;
    }
    
    maximumSumRectangle(mat) {
        const rows = mat.length, cols = mat[0].length;
        let maxSum = -Infinity;
        for (let top = 0; top < rows; top++) {
            let temp = new Array(cols).fill(0);
            for (let bottom = top; bottom < rows; bottom++) {
                for (let col = 0; col < cols; col++) temp[col] += mat[bottom][col];
                let currMax = this.kadane(temp);
                maxSum = Math.max(maxSum, currMax);
            }
        }
        return maxSum;
    }
}