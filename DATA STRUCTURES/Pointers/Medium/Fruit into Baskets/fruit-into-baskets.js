process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.totalFruits(arr);
        console.log(ans);
        console.log("~");
    }
}

// User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} fruits
 * @returns {number}
 */

class Solution {
    // Function to find the sum of minimum elements of all possible subarrays of fruits.
    totalFruits(arr) {
        let start = 0, maxFruits = 0;
        const fruitCount = new Map();
        
        for (let end = 0; end < arr.length; end++) {
            fruitCount.set(arr[end], (fruitCount.get(arr[end]) || 0) + 1);
            while (fruitCount.size > 2) {
                fruitCount.set(arr[start], fruitCount.get(arr[start]) - 1);
                if (fruitCount.get(arr[start]) === 0) fruitCount.delete(arr[start]);
                start++;
            }
            maxFruits = Math.max(maxFruits, end - start + 1);
        }
        return maxFruits;
    }
}