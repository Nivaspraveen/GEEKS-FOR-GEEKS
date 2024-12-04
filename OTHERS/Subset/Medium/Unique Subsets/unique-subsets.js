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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let result = obj.AllSubsets(arr, n);
        let s = '';
        for(let i=0; i<result.length; i++){
            s+="(";
            for(let j=0; j<result[i].length; j++){
                s+=result[i][j];
                if(j < result[i].length - 1){
                    s+=" ";
                }
            }
            s+=")";
        }
        console.log(s);
        
        console.log("~");
    }
}

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[][]}
*/

class Solution {
    
    AllSubsets(arr, n) {
        arr.sort((a, b) => a - b);
        let result = [];
        
        const backtrack = (start, currSubset) => {
            result.push([...currSubset]);
            for (let i = start; i < n; i++) {
                if (i > start && arr[i] === arr[i - 1]) continue;
                currSubset.push(arr[i]);
                backtrack(i + 1, currSubset);
                currSubset.pop();
            }
        }
        backtrack(0, []);
        return result;
    }
}