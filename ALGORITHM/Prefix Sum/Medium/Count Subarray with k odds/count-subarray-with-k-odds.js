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

        let n = parseInt(readLine());

        let nums = new Array(n);
        let input_nums = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            nums[i] = input_nums[i];
        }

        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.countSubarray(n, nums, k);
        console.log(res);
    
        console.log("~");
    }
}

class Solution {
    /**
    * @param number n
    * @param number[] nums
    * @param number k

    * @returns number
    */
    countSubarray(n, nums, k) {
        const prefixMap = new Map();
        prefixMap.set(0, 1);
        let oddCount = 0, result = 0;
        
        for (let i = 0; i < n; i++) {
            if (nums[i] % 2 !== 0) oddCount++;
            const target = oddCount - k;
            if (prefixMap.has(target)) result += prefixMap.get(target);
            prefixMap.set(oddCount, (prefixMap.get(oddCount) || 0) + 1);
        }
        return result;
    }
}