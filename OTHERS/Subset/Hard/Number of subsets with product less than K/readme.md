**Number of subsets with product less than k**

**Difficulty:** Hard    **Accuracy:** 41.26%    **Submissions:** 12K+   **Points:** 8

Given an array arr[] of N elements. Find the number of non-empty subsets whose product of elements is less than or equal to a given integer K.


*Example 1:*

**Input:**

N = 4

arr[] = {2, 4, 5, 3}

K = 12

**Output:**
8

**Explanation:**
All possible subsets whose products are less than 12 are:
(2), (4), (5), (3), (2, 4), (2, 5), (2, 3), (4, 3)

*Example 2:*

**Input:**

N = 3

arr[] = {9, 8, 3}

K = 2 

**Output:**
0

**Explanation:**
There is no subsets with product less than or equal to 2.

**Your Task:**  
You don't need to read input or print anything. Your task is to complete the function numOfSubsets() which takes 2 integers N, and K, and an array arr of size N as input and returns the number of subsets with product less equal to K.


**Expected Time Complexity:** O(N*2N/2)
**Expected Auxiliary Space:** O(N)


**Constraints:**

*1 ≤ N ≤ 30*

*1 ≤ arr[i] ≤ 10*

*1 ≤ K ≤ 106*

**Company Tags:**
*Morgan Stanley  Amazon*

**Topic Tags:**
*Arrays  subset  Data Structures*

**Related Interview Experiences:**
[*Morgan Stanley Interview Experience For Internship On Campus 2020*](https://www.geeksforgeeks.org/morgan-stanley-interview-experience-for-internship-on-campus-2020/)

**Related Articles:**
[*Number Subsets Product Less K*](https://www.geeksforgeeks.org/number-subsets-product-less-k/)