**Kth Prime Factor**

**Difficulty:** Easy    **Accuracy:** 36.49%    **Submissions:** 7K+    **Points:** 2

Given two numbers n and k, find the kth prime factor of n. 

*Example 1:*

**Input:** n = 225, k = 2

**Output:** 3

**Explaination:** The prime factors 3, 3, 5 and 5. So 3 is the 2nd one.

*Example 2:*

**Input:** n = 81, k = 5

**Output:** -1

**Explaination:** The 4 prime factors are 3, 3, 3, 3. So there is no 5th one.

**Your Task:**
You do not need to read input or print anything. Your task is to complete the function kthPrime() which takes the value n and k as input parameters and return the kth prime number. If k is greater than total number of primes then return -1.


**Expected Time Complexity:** O(n*log(log n))
**Expected Auxiliary Space:** O(n)


**Constraints:**

*1 ≤ n ≤ 104*

*1 ≤ k ≤ 50*

**Topic Tags:**
*Mathematical    Prime Number    sieve   factorial   Algorithms*

**Related Articles:**
[*K Th Prime Factor Given Number*](https://www.geeksforgeeks.org/k-th-prime-factor-given-number/)