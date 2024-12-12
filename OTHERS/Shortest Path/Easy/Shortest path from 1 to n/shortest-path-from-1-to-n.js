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
        let obj = new Solution();
        let res = obj.minimumStep(n);
        if(res === -0)
            res = 0;
        console.log(res);
        
        console.log("~");
    }
}

//User function Template for javascript

/**
 * @param {number} n
 * @return {number}
*/

class Solution {
    minimumStep(n){
        if (n == 1) return 0;
        let steps = 0, curr = n
        while (curr > 1) {
            curr = curr % 3 === 0 ? curr / 3 : curr--
            steps++;
        }
        return steps;
    }
}