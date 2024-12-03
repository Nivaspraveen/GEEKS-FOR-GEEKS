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

        const arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let res = obj.canSplit(arr);
        console.log(res);
        console.log("~");
    }
}

class Solution {
    canSplit(arr) {
        const totalSum = arr.reduce((a, b) => a + b, 0);
        if (totalSum % 2 !== 0) return false;
        
        const targetSum = totalSum / 2;
        let runningSum = 0;
        
        for (let i = 0; i < arr.length; i++) {
            runningSum += arr[i];
            if (runningSum === targetSum) return true;
        }
        return false;
    }
}