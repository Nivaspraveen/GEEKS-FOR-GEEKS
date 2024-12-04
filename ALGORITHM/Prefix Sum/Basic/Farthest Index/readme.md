**Farthest Index**

**Difficulty:** Basic   **Accuracy:** 42.01%    **Submissions:** 5K+    **Points:** 1

Given a positive integer x and an array arr of positive integers. We need to find the farthest index at which x is present. If any occurrence of x doesn't exist, then return -1.

*Examples:*

**Input:** arr[] = [7, 42, 5, 6, 42, 8, 7, 5, 3, 6, 7] and x = 7

**Output:** 11

**Explanation:** The last index contains value 7.

**Input:** arr[] = [1, 2, 2]

**Output:** 1

**Explanation:** The farthest index which contains value x is 1.

**Expected Time Complexity:** O(n)

**Expected Auxiliary Space:** O(1)

**Constraints:**

*1 ≤ arr.size() ≤ 106*

*1 ≤ arr[i], x ≤ 105*

**Topic Tags:**
*prefix-sum  Arrays  Data Structures Algorithms*