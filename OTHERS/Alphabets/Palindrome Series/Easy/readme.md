**Palindromic Series**

**Difficulty**: Easy    **Accuracy**: 41.33%    **Submissions**: 4K+    **Points**: 2

You have given a number n. He has to create a lowercase alphabetical string from that number and tell whether the string is palindrome. *a = 0 , b = 1….*. and so on. The number of digits represents the character and you have to repeat the string till the sum of all digits.
Note: No number will start with zero. Consider alphabets ' a to j ' only i.e. single digit numbers from 0 to 9.

**Examples:**

*Input:* n = 61
*Output:* true
*Explanation:* n = 61 the substring “gb” will be printed till 7 (6+1) characters i.e. “gbgbgbg” and it is palindrome. return true.

*Input:* n = 1998 
*Output:* false
*Explanation:* The substring formed will be bjji and repeat 1+9+9+8=27 times.

**Expected Time Complexity:** O(n).
**Expected Auxiliary Space:** O(n).

**Constraints:**
1 ≤ n ≤ 107

**Topic Tags**
*Arrays Strings Numbers palindrome  alphabets   Data Structures*

**Related Articles**
https://www.geeksforgeeks.org/check-if-the-characters-in-a-string-form-a-palindrome-in-o1-extra-space/