**Subarrays with equal 1s and 0s**

**Difficulty:** Medium  **Accuracy:** 57.47%    **Submissions:** 56K+   **Points:** 4

Given an array containing 0s and 1s. Find the number of subarrays having equal number of 0s and 1s.

*Example 1:*

**Input:**

n = 7

A[] = {1,0,0,1,0,1,1}

**Output:** 8

**Explanation:** The index range for the 8 
sub-arrays are: (0, 1), (2, 3), (0, 3), (3, 4), 
(4, 5) ,(2, 5), (0, 5), (1, 6)

*Example 2:*

**Input:**

n = 5

A[] = {1,1,1,1,0}

**Output:** 1

**Explanation:** The index range for the 
subarray is (3,4).

**Your Task:**
You don't need to read input or print anything. Your task is to complete the function countSubarrWithEqualZeroAndOne() which takes the array arr[] and the size of the array as inputs and returns the number of subarrays with equal number of 0s and 1s.

**Expected Time Complexity:** O(n).

**Expected Auxiliary Space:** O(1).

**Constraints:**

*1 <= n <= 106*

*0 <= A[i] <= 1*

**Topic Tags:**
*Arrays  Hash    Data Structures prefix-sum*

**Related Articles:**
[*Count Subarrays Equal Number 1s 0s*](https://geeksforgeeks.org/count-subarrays-equal-number-1s-0s/)