**Count subsets having distinct even numbers**

**Difficulty:** Easy    **Accuracy:** 30.01%    **Submissions:** 2K+    **Points:** 2

Given an array arr of integers, you need to count all unique subsets that contain only even numbers from the array. Two subsets are considered identical if they contain the same set of elements, regardless of their order.

**Note: Only distinct even numbers should be considered when generating subsets. For example, if an even number appears multiple times, it should be counted only once in the subset generation.**

*Examples:*

**Input:** arr[] = [4, 2, 1, 9, 2, 6, 5, 3]

**Output:** 7

**Explanation:** The subsets are: [4], [2], [6], [4, 2], [2, 6], [4, 6], [4, 2, 6]

**Input:** arr[] = [10, 3, 4, 2, 4, 20, 10, 6, 8, 14, 2, 6, 9]

**Output:** 127

**Explanation:** The distinct even numbers are {2, 4, 6, 8, 10, 14, 20}. The number of unique subsets that can be formed from these numbers is 127.

**Expected Time Complexity:** O(n)

**Expected Auxiliary Space:** O(n)

**Constraints:**

*1<= arr.size() <=106*

*1<=arr[i]<=104*

It is Guaranteed that answers will fit in 64-bits.

**Topic Tags:**
*Arrays  subset  Combinatorial   Data Structures*

**Related Articles:**
[*Count Subsets Distinct Even Numbers*](https://www.geeksforgeeks.org/count-subsets-distinct-even-numbers/)