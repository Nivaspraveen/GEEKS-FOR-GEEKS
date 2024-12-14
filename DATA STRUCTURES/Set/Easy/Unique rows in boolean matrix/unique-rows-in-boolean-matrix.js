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

function printArray(res) {
    let s="";
    let n = res.length;
    
    for(let i=0;i<n;i++){
        for(let j=0;j<res[i].length;j++){
            s+=res[i][j];
            s+=" ";
        }
        s+="$";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let m = input_ar1[1];
        let arr = [];
        let cnt=0;
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            let arr1 = new Array(m);
            for(let j=0;j<m;j++){
                arr1[j] = input_ar1[cnt++];
            }
            arr.push(arr1);
        }
        let obj = new Solution();
        let res = obj.uniqueRow(arr, n, m);
        printArray(res);
    
        console.log("~");
    }
}

//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number[][]} 
 */
 
class Solution {
    uniqueRow(arr, n){
        let uniqueRows = new Set(), result = [];
        for (let i = 0; i < n; i++) {
            let currRow = arr[i].join('');
            if (!uniqueRows.has(currRow)) {
                uniqueRows.add(currRow);
                result.push(arr[i]);
            }
        }
        return result;
    }
}