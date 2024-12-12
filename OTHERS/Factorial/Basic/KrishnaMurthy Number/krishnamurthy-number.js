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
        let res = obj.isKrishnamurthy(n);
        console.log(res);
            
        console.log("~");
    }
}

//User function Template for javascript


/**
 * @param {number} n
 * @returns {string}
*/

class Solution{
    isKrishnamurthy(n){
        const factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
        let sumOfFact = 0, temp = n;
        while (temp > 0) {
            const digit = temp % 10;
            sumOfFact += factorial[digit];
            temp = Math.floor(temp / 10);
        }
        return sumOfFact === n ? 'YES' : 'NO';
    }
}