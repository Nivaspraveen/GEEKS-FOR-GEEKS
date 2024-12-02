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

function printArray(res, n) {
    let s="";
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
        let str1 = readLine();
        let str2 = readLine();
        let obj = new Solution();
        let res = obj.remAnagram(str1, str2);
        console.log(res);
    
console.log("~");
}
}

//User function Template for javascript

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {number} 
 */
 
class Solution {
    remAnagram(str1, str2){
        const count1 = Array(26).fill(0), count2 = Array(26).fill(0);
        for (let i = 0; i < str1.length; i++) count1[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        for (let i = 0; i < str2.length; i++) count2[str2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        let result = 0;
        for (let i = 0; i < 26; i++) result += Math.abs(count1[i] - count2[i]);
        return result;
    }
}