**The Inverting Factor**

**Difficulty:** Easy    **Accuracy:** 50.02%    **Submissions:** 5K+    **Points:** 2

You are given an array arr[] of positive integers. Your task is to find the smallest possible "Inverting Factor" among all pairs of integers in the array. The *"Inverting Factor"* of two integers is defined as the absolute difference between the reverse of the two integers.

*Note:* Trailing zeros in a number of ignored while reversing, i.e. 1200 becomes 21 when reversed.

**Examples:**

*Input :* arr[] = [56, 20, 47, 93, 45]
*Output :* 9
*Explanation:* The minimum inverting factor is 9 of the pair (56,47).Reverse (56 -> 65) and (47 -> 74) so,difference between them is 9.

*Input :* arr[] = [48, 23, 100, 71, 56, 89]
*Output :*  14 

**Expected Time Complexity:** O(nlogn)
**Expected Auxiliary Space:** O(1)

**Constraints : **
2 ≤ arr.size() ≤ 105
1 ≤ arr[i] ≤ 105

**Topic Tags**
*Arrays  Numbers Reverse Data Structures*

**Related Articles**
https://www.geeksforgeeks.org/minimum-inverting-factor-in-an-array/