**Split an array into two equal Sum subarrays**

**Difficulty:** Easy    **Accuracy:** 54.45%    **Submissions:** 33K+   **Points:** 2

Given an array of integers arr, return true if it is possible to split it in two subarrays (without reordering the elements), such that the sum of the two subarrays are equal. If it is not possible then return false.

*Examples:*

**Input:** arr = [1, 2, 3, 4, 5, 5]

**Output:** true

**Explanation:** In the above example, we can divide the array into two subarrays with equal sum. The two subarrays are: [1, 2, 3, 4] and [5, 5]. The sum of both the subarrays are 10. Hence, the answer is true.

**Input:** arr = [4, 3, 2, 1]

**Output:** false

**Explanation:** In the above example, we cannot divide the array into two subarrays with equal sum. Hence, the answer is false.

**Expected Time Complexity:** O(n)
**Expected Space Complexity:** O(1)

**Constraints:**

*1<=arr.size()<=105* 

*1<=arr[i]<=106*

**Related Articles:** [*Split array into two equal sum subarrays*](https://www.geeksforgeeks.org/split-array-two-equal-sum-subarrays/)