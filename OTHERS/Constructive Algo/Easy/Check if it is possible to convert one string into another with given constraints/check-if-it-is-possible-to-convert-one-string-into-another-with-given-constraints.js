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
        let [S,T] = readLine().trim().split(" ");
        let M = S.length;
        let N = T.length;
        let obj = new Solution();
        let res = obj.isItPossible(S,T,M,N);
        console.log(res);
    
        console.log("~");
    }
}

//User function Template for javascript
/**
 * @param {string} S
 * @param {string} T
 * @param {number} M
 * @param {number} N
 * @returns {boolean}
*/

class Solution {
    //Function to check whether it is possible
    isItPossible(S, T, M, N) {
        if (M !== N)  return 0;  
        let s_ptr = 0, t_ptr = 0;
        
        while (s_ptr < M && t_ptr < N) {
            while (s_ptr < M && S[s_ptr] === '#') s_ptr++;
            while (t_ptr < N && T[t_ptr] === '#') t_ptr++; 
            if (s_ptr === M && t_ptr === N) return 1; 
            if ((s_ptr === M) !== (t_ptr === N)) return 0; 
            if (S[s_ptr] !== T[t_ptr])  return 0; 
            if (S[s_ptr] === 'A' && s_ptr < t_ptr) return 0; 
            if (S[s_ptr] === 'B' && s_ptr > t_ptr) return 0; 
            s_ptr++; 
            t_ptr++;
        } 
        return 1;
    }
}