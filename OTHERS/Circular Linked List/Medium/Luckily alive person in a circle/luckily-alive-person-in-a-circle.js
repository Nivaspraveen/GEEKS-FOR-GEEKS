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

function printList(res, res_size) {
    let s="";
    for(let i=0;i<res_size;i++){
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
        let res = obj.find(n);
        console.log(res);
        
        console.log("~");
    }
}

//User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
*/

class Solution {
    //Function to find the value of x^n.
    find(N) {
        let highestPowOfTwo = 1;
        while (highestPowOfTwo <= N) highestPowOfTwo *= 2;
        highestPowOfTwo /= 2;
        
        let L = N - highestPowOfTwo;
        return 2 * L + 1;
    }
}