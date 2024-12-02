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