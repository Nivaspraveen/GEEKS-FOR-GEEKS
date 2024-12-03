//Initial Template for javascript 

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let N =  parseInt(readLine());
        let K =  parseInt(readLine());
        let A =  readLine().split(' ').map(x=>parseInt(x)
);
        let obj = new Solution();
        let res = obj.totalCuts(N, K, A);
        console.log(res);
    
    
        console.log("~");
    }
}

//User function Template for javascript
/**
 * @param {number} N
 * @param {number} K
 * @param {number[]} A
 * @returns {number}
 */

class Solution {
    //Function to count the total number of distinct subsequences.
    totalCuts(N, K, A) {
        let leftMax = new Array(N), rightMin = new Array(N);
        
        leftMax[0] = A[0];
        for (let i = 1; i < N; i++) leftMax[i] = Math.max(leftMax[i - 1], A[i]);
        
        rightMin[N - 1] = A[N - 1];
        for (let i = N - 2; i >= 0; i--) rightMin[i] = Math.min(rightMin[i + 1], A[i]);
        
        let cuts = 0;
        for (let i = 0; i < N - 1; i++) {
            if (leftMax[i] + rightMin[i + 1] >= K) cuts++;
        }
        return cuts;
    }
}