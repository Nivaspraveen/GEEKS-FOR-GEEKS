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
        let [n1,n2] = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr1 = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr2 = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.commonSum(n1,n2,arr1,arr2);
        console.log(res);
    
        console.log("~");
    }
}

//User function Template for javascript
/**
 * @param {number} n1
 * @param {number} n2
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number}
*/

class Solution {
    //Function to find the sum of elements common in two arrays.
    commonSum(n1, n2, arr1, arr2) {
        const mod = 1e9 + 7;
        const set1 = new Set(arr1), set2 = new Set(arr2);
        let sum = 0;
        for (let num of set1) {
            if (set2.has(num)) sum = (sum + num) % mod;
        }
        return sum;
    }
}