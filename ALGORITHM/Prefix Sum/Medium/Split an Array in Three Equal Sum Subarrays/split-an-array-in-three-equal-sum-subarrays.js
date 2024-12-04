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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input1 = readLine().split(' ').map(x => parseInt(x));
        let n = input1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input1[i];
        }
        let obj = new Solution();
        let res = obj.findSplit(arr);
        if (res[0] === -1 && res[1] === -1 || res.length != 2)
            console.log("false");
        else {
            let sum1 = 0, sum2 = 0, sum3 = 0;
            for (let i = 0; i < arr.length; i++) {
                if (i <= res[0]) {
                    sum1 += arr[i];
                } else if (i <= res[1]) {
                    sum2 += arr[i];
                } else {
                    sum3 += arr[i];
                }
            }

            if (sum1 === sum2 && sum2 === sum3) {
                console.log("true");
            } else {
                console.log("false");
            }
        }
        console.log("~");
    }
}

// User function Template for Javascript
/**
 * @param {number[]} arr
 * @returns {boolean}
 */

class Solution {

    findSplit(arr) {
        const totalSum = arr.reduce((a, b) => a + b, 0);
        if (totalSum % 3 !== 0) return [-1, -1];
        
        const targetSum = totalSum / 3;
        let currSum = 0, firstIndex = -1, secondIndex = -1;
        
        for (let i = 0; i < arr.length; i++) {
            currSum += arr[i];
            if (firstIndex === -1 && currSum === targetSum) firstIndex = i;
            else if (firstIndex !== -1 && secondIndex === - 1 && currSum === targetSum * 2) {
                secondIndex = i;
                break;
            }
        }
        if (firstIndex !== -1 && secondIndex !== -1) return [firstIndex, secondIndex];
        return [-1, -1];  
    }
}