// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s = readLine();

        let obj = new Solution();
        let res = obj.bracketNumbers(s);
        printList(res, res.length);
        console.log("~");
    }
}

// User function Template for javascript

/**
 * @param {string} s
 * @returns {number[]}
 */

class Solution {
    bracketNumbers(str) {
        let stack = [], result = [], count = 1;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                stack.push(count);
                result.push(count);
                count++;
            } else if (str[i] === ')') {
                let top = stack.pop();
                result.push(top);
            }
        }
        return result;
    }
}