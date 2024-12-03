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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        let arr = new Array(n);
        
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
        {
            arr[i] = parseInt(input_line[i]);
        }
        
        let obj = new Solution();
        
        let ans = obj.countSubarrWithEqualZeroAndOne(arr, n)
        if(ans==-0n)
        ans=0n;
        console.log(ans.toString());
    
        console.log("~");
    }
}

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {BigInt}
*/

class Solution {
    //Function to count subarrays with 1s and 0s.
    countSubarrWithEqualZeroAndOne(arr, n){
        let countMap = new Map(), prefixSum = 0, count = 0;
        countMap.set(0, 1);
        for (let i = 0; i < n; i++) {
            prefixSum += (arr[i] === 0) ? -1 : 1;
            if (countMap.has(prefixSum)) {
                count += countMap.get(prefixSum);
                countMap.set(prefixSum, countMap.get(prefixSum) + 1);
            }
            else countMap.set(prefixSum, 1);
        }
        return count;
    }
}
