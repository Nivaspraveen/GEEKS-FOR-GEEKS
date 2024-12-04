**Sum of all subsets formed by first N natural numbers**

**Difficulty:** Basic   **Accuracy:** 38.9% **Submissions:** 1K+    **Points:** 1

Given a number N, the task is to find the sum of all the elements from all possible subsets of a set formed by first N natural numbers.

*Example 1:*

**Input:**
N = 2

**Output:**
6

**Explanation:**

Possible subsets are {{1}, {2}, {1, 2}}.

Sum of elements in the subsets is 1 + 2 + 1 + 2 = 6.

*Example 2:*

**Input:**
N = 3

**Output:**
24

**Explanation:**

Possible subsets are {{1},{2},{3},{1,2},{2,3},{1,3},{1,2,3}}.

Sum of elements in the subsets is 1+2+3+1+2+2+3+1+3+1+2+3 = 24

**Your Task:**  
You don't need to read input or print anything. Your task is to complete the function sumOfSubsets() which takes an integer N as an input parameter and return the sum of all the elements from all possible subsets of a set formed by first N natural numbers.

**Expected Time Complexity:** O(logN)
**Expected Auxiliary Space:** O(1)

**Constraints:**
*1 <= N <= 50*

**Topic Tags:**
*Mathematical    subset  Algorithms*

Related Articles:
[*Sum Subsets Set Formed First N Natural Numbers*](https://www.geeksforgeeks.org/sum-subsets-set-formed-first-n-natural-numbers/)