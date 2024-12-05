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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = parseInt(input_ar1[0]);
        let sum = parseInt(input_ar1[1]);
        let obj = new Solution();
        console.log(obj.largestNumber(n, sum));
    
        console.log("~");
    }
}

//User function Template for javascript

/**
 * @param {number} n
 * @param {number} sum
 * @returns {string}
*/

class Solution {
    //Function to return the largest possible number of n digits with sum equal to given sum.
    largestNumber(n, sum) {
        if (sum > 9 * n) return '-1';
        let result = Array(n).fill(0);
        
        for (let i = 0; i < n; i++) {
            if (sum >= 9) {
                result[i] = 9;
                sum -= 9;
            } else {
                result[i] = sum;
                sum = 0;
            }
        }
        if (sum > 0) return '-1';
        return result.join('');
    }
}