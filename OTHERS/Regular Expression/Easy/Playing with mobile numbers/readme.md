**Playing with mobile numbers**

**Difficulty:** Easy    **Accuracy:** 24.35%    **Submissions:** 7K+    **Points:** 2

Given a number in form of a string s. The task is to find whether the number is valid indian mobile number or not.

**Rules for valid :-indian mobile number**

The number should contain 10 or 11 or 12 digits.

If it contains 10 digits, then first  digit should be 7 or 8 or 9.

If it contains 11 digits, then first  digit should be 0 and second rule follwed.

If it contains 12 digits, then first two digits should be 91 and second rule followed 

*Example 1:*

**Input:** s = "912345678999"

**Output:** 0

*Example 2:*

**Input:** s = "123456789"

**Output:** 0
 
**Your Task:**
You don't need to read or print anything. Your task is to complete the function is_valid() which takes s as input parameter and returns 1 if it is valid indian mobile number otherwise returns 0.
 

**Expected Time Complexity:** O(1)

**Expected Space Complexity:** O(1)

**Constraints:**
*1 <= |s| <= 13*

**Topic Tags:**
*Quantifiers Regular Expression*

**Related Articles:**
[*Program To Check Valid Mobile Number*](https://www.geeksforgeeks.org/program-to-check-valid-mobile-number/)