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
    for (; i < t; i++) {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findSumOfDigits(N);
        console.log(res);
    
        console.log("~");
    }
}

//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */
class Solution {
    findSumOfDigits(N) {
        const calcFact = n => {
            const result = [1];
            for (let i = 2; i <= n; i++) {
                let carry = 0;
                for (let j = 0; j < result.length; j++) {
                    const product = result[j] * i + carry;
                    result[j] = product % 10; 
                    carry = Math.floor(product / 10); 
                }
                while (carry > 0) {
                    result.push(carry % 10); 
                    carry = Math.floor(carry / 10);
                }
            }
            return result;
        };
        
        const sumOfDigits = factDigits => factDigits.reduce((a, b) => a + b, 0);
        const factDigits = calcFact(N);
        return sumOfDigits(factDigits);
    }
}

