const input = require('readline').createInterface({
    input : process.stdin, 
    output : process.stdout
});

input.question('', (t) => {
    t = parseInt(t);
    const solution = new Solution();

    const processTestCase = () => {
        input.question('', (line1) => {
            input.question('', (line2) => {
                let arr1 = line1.trim().split(' ').map(Number);
                let arr2 = line2.trim().split(' ').map(Number);
                console.log(solution.longestCommonSum(arr1, arr2));
                console.log("~")
                if (--t > 0) {
                    processTestCase();
                }
                else {
                    input.close();
                }
            });
        });
    };

    processTestCase();
});

class Solution {
    longestCommonSum(arr1, arr2) {
        const n = arr1.length, prefixSumIndex = new Map();
        prefixSumIndex.set(0, -1);
        
        let maxLength = 0, prefixSum = 0;
        for (let i = 0; i < n; i++) {
            prefixSum += arr1[i] - arr2[i];
            if (prefixSumIndex.has(prefixSum)) maxLength = Math.max(maxLength, i - prefixSumIndex.get(prefixSum));
            else prefixSumIndex.set(prefixSum, i);
        }
        return maxLength;
    }
}