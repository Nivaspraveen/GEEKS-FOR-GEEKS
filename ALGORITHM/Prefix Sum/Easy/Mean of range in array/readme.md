**Mean of range in array**

Difficulty: Easy    Accuracy: 44.85%    Submissions: 8K+    Points: 2

Given an array arr and q queries. Write a program to find the floor value of the mean in the range l to r for each query in a new line.

Queries are given by an array of queries[] of size 2 * q. Here queries[2*i] denote l and queries[2*i+1] denote r for i-th query.

*Examples:*

**Input:** arr[] = [1, 2, 3, 4, 5] and q[] = [0, 2, 1, 3, 0, 4]

**Output:** [2, 3, 3]

**Explanation:** Here we can see that the array of integers is [1, 2, 3, 4, 5]. Query 1: L = 0 and R = 2 

Sum = 6 Integer Count = 3 So, Mean is 2

**Input:** arr[] = [6, 7, 8, 10] and q[] = [0, 3, 1, 2]

**Output:** [7, 7]

**Explanation:** Element count is 3 and sum of element from 0 to 3 are 21. So mean is 7.

**Expected Time Complexity:** O(q + n).

**Expected Auxiliary Space:** O(n).

**Constraints:** 

*1 ≤ arr.size() ≤ 106*

*1 ≤ arr[i] ≤ 103*

**Topic Tags:**
*prefix-sum  Arrays  Data Structures Algorithms*

**Related Articles:**
[*Mean Range Array*](https://www.geeksforgeeks.org/mean-range-array/)