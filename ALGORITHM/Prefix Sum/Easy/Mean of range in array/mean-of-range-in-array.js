// Initial Template for javascript

// Driver code
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
        let q = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.findMean(arr, q);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}


// User function Template for javascript

class Solution {
    findMean(arr, q) {
        const prefixSum = new Array(arr.length).fill(0), result = [];
            
            
        prefixSum[0] = arr[0];
        for (let i = 1; i < arr.length; i++) prefixSum[i] = prefixSum[i - 1] + arr[i];
        
        for (let i = 0; i < q.length / 2; i++) {
            const l = q[2 * i], r = q[2 * i + 1];
            const rangeSum = l > 0 ? prefixSum[r] - prefixSum[l - 1] : prefixSum[r],
                count = r - l + 1,
                meanFloor = Math.floor(rangeSum / count);
            result.push(meanFloor);
        }
        return result;
    }
}