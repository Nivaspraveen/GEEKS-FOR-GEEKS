**Equilibrium Point**

**Difficulty:** Easy    **Accuracy:** 28.13%    **Submissions:** 596K+  **Points:** 2

Given an array arr of non-negative numbers. The task is to find the first equilibrium point in an array. The equilibrium point in an array is an index (or position) such that the sum of all elements before that index is the same as the sum of elements after it.

***Note:*** Return equilibrium point in 1-based indexing. Return -1 if no such point exists. 

*Examples:*

**Input:** arr[] = [1, 3, 5, 2, 2]

**Output:** 3 

**Explanation:** The equilibrium point is at position 3 as the sum of elements before it (1+3) = sum of elements after it (2+2). 

**Input:** arr[] = [0, 1, 0]

**Output:** 2

**Explanation:** Since sum all the elements before 1 and after 1 are same, so index 2 is equillibrium.

**Input:** arr[] = [1, 2, 3]

**Output:** -1

**Explanation:** There is no equilibrium point in the given array.

**Expected Time Complexity:** O(n)
**Expected Auxiliary Space:** O(1)

**Constraints:**
3 <= arr.size() <= 106
0 <= arr[i] <= 109

**Company Tags:**
*Amazon  Adobe*

**Topic Tags:**
*prefix-sum  Arrays  Data Structures Algorithms*

*Related Articles:* [*Equilibrium Index Of An Array*](https://www.geeksforgeeks.org/equilibrium-index-of-an-array/)