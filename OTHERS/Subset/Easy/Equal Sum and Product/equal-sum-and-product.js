function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        const solution = new Solution();
        const ans = solution.countSubarrays(arr);
        console.log(ans);
        console.log("~");
    }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

class Solution {
    countSubarrays(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            let sum = 0, product = 1;
            for (let j = i; j < arr.length; j++) {
                sum += arr[j];
                product *= arr[j];
                if (sum === product) count++;
            }
        }
        return count;
    }
}