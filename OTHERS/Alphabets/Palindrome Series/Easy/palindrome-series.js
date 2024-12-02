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
        let ob = new Solution();
        let ans = ob.pallan(arr);
        if (ans) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
        tc--;
    }
}

// User function Template for javascript
class Solution {
    pallan(n) {
        const str = n.toString();
        let sum = 0, substr = '';
        
        for (let i = 0; i < str.length; i++) {
            const digit = parseInt(str[i]);
            sum += digit;
            substr += String.fromCharCode('a'.charCodeAt(0) + digit);
        }
        let repeatedStr = '';
        while (repeatedStr.length < sum) repeatedStr += substr;
        repeatedStr = repeatedStr.slice(0, sum);
        
        const len = repeatedStr.length;
        for (let i = 0; i < len / 2; i++) {
            if (repeatedStr[i] !== repeatedStr[len - 1 - i]) return false;
        }
        return true;
    }
}