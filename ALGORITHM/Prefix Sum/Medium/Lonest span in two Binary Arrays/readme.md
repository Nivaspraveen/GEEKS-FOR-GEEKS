**Longest Span in two Binary Arrays**

**Difficulty:** Medium  **Accuracy:** 48.22%    **Submissions:** 12K+   **Points:** 4

Given two binary arrays arr1[] and arr2[] of same size. Find the length of the longest common span [i, j] where j>=i such that arr1[i..j] is equal to arr2[i..j]. 

*Examples:*

**Input:** arr1[] = [0, 1, 0, 0, 0, 0], arr2[] = [1, 0, 1, 0, 0, 1]

**Output:** 4

**Explanation:** The longest span with same sum is from index 1 to 4 following zero based indexing.

**Input:** arr1[] = [0, 0, 1, 1, 0, 0], arr2[] = [1, 0, 1, 0, 0, 1]

**Output:** 5

**Explanation:** The longest span with same sum is from index 1 to 5 following zero based indexing.

**Expected Time Complexity:** O(n)

**Expected Auxiliary Space:** O(n)

**Constraints:**

*1 <= arr.size() <= 106*

*0 <= arr1[i], arr2[i] <= 1*

**Topic Tags:**
*prefix-sum  sliding-window  Arrays  Data Structures Algorithms*

**Related Articles:**
[*Longest Span Sum Two Binary Arrays*](https://www.geeksforgeeks.org/longest-span-sum-two-binary-arrays/)