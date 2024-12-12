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
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.isStrong(n);
        console.log(res);
   
        console.log("~");
    }
}

//User function Template for javascript


/**
 * @param {number} n
 * @returns {number}
*/

class Solution{
    isStrong(n){
        const fact = Array(10).fill(1);
        for (let i = 2; i < 10; i++) fact[i] = fact[i - 1] * i;
        
        let sum = 0, original = n;
        while (n > 0) {
            let digit = n % 10;
            sum += fact[digit];
            n = Math.floor(n / 10);
        }
        return sum === original ? 1 : 0;
    }
}