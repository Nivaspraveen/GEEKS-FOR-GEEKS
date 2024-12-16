// Initial Template for javascript
// Position this line where user code will be pasted.

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());
        let ob = new Solution();
        let ans = ob.countArray(arr, k);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}

// User function Template for javascript
class Solution {
    // Function to count the occurrences of numbers in the array
    countArray(arr, x) {
        const occurrences = {};
        for (let num of arr) occurrences[num] = (occurrences[num] || 0) + 1;
        
        const result = arr.map(num => {
            const avg = Math.floor((num + x) / 2);  
            return occurrences[avg] || 0;  
        });
    
        return result;
    }
}