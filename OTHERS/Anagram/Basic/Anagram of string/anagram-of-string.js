//User function Template for javascript

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {number} 
 */
 
class Solution {
    remAnagram(str1, str2){
        const count1 = Array(26).fill(0), count2 = Array(26).fill(0);
        for (let i = 0; i < str1.length; i++) count1[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        for (let i = 0; i < str2.length; i++) count2[str2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        let result = 0;
        for (let i = 0; i < 26; i++) result += Math.abs(count1[i] - count2[i]);
        return result;
    }
}