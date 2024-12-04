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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let S = readLine();
        let obj = new Solution();
        let res = obj.maxSubstring(S);
        console.log(res);
        
    
        console.log("~");
    }
}

//User function Template for javascript
/**
 * @param {string} S
 * @returns {number}
*/

class Solution{
    maxSubstring(S){
        let maxDiff = -1, currSum = 0;
        for (let i = 0; i < S.length; i++) {
            currSum += (S[i] === '0') ? 1 : -1;
            maxDiff = Math.max(maxDiff, currSum);
            if (currSum < 0) currSum = 0;
        }
        return maxDiff;
    }
}