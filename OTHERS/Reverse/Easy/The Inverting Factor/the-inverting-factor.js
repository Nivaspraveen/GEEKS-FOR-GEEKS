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