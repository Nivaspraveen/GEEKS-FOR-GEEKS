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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let m = input_ar1[1];
        let k = input_ar1[2];
        let arr = [];
        let p=0;
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            let temp = [];
            for(let j=0;j<m;j++){
                temp.push(input_ar1[p++]);
            }
            arr.push(temp);
        }
        let obj = new Solution();
        let res = obj.findK(arr, n, m, k);
        console.log(res);
           
        console.log("~");
    }
}

//User function Template for javascript

/**
 * @param {number[][]} a
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
*/

class Solution{
    findK(a,n,m,k){
        let top = 0, bottom = n - 1, left = 0, right = m - 1;
        let count = 0;
        
        while (top <= bottom && left <= right) {
            for (let i = left; i <= right; i++) {
                count++;
                if (count === k) return a[top][i];
            }
            top++;
            
            for (let i = top; i <= bottom; i++) {
                count++;
                if (count === k) return a[i][right];
            }
            right--;
            
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    count++;
                    if (count === k) return a[bottom][i];
                }
                bottom--;
            }
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    count++;
                    if (count === k) return a[i][left];
                }
                left++;
            }
        }
    }
}