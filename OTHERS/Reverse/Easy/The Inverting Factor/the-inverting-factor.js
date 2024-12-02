// Initial Template for javascript
// Position this line where user code will be pasted.
//  Driver code

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
        // let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.findMinimumIF(arr);
        console.log(ans);
        // console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}

// User function Template for javascript
class Solution {
    reverseNumber(num) {
        return parseInt(num.toString().split('').reverse().join(''), 10);
    }
    // Function to count the number of subarrays.
    findMinimumIF(arr) {
        let revArr = arr.map(this.reverseNumber);
        revArr.sort((a, b) => a - b);
        let minDiff = Infinity;
        for (let i = 1; i < revArr.length; i++) {
            const diff = Math.abs(revArr[i] - revArr[i - 1]);
            minDiff = Math.min(minDiff, diff);
        }
        return minDiff;
    }
}