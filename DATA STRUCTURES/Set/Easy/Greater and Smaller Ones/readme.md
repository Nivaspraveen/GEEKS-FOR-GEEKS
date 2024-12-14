# Greater and Smaller Ones

**Difficulty:** Easy    **Accuracy:** 26.23%    **Submissions:** 4K+    **Points:** 2

Given an unsorted array A of size N and value K. The elements of the array A contain positive integers. You have to print all the elements that are greater than K in the array(including K as well if present in the array A) and print all the elements that are smaller than K in separate lines. If the elements greater than K does not present in the array then print "-1". Similarly, in case of smaller elements print -1 if elements smaller than k doesn't exist. Note that you need to sort the array, if there are duplicates print only first element.

### Input Format:
First line of input contains number of testcases T. For each testcase, there are two lines, first of which contains N and K separated by space, next line contains N space-separated integers.

### Output Format:
For each testcase, print the required elements(if any), else print "-1" (without quotes).

#### Example:

#### Input:
1
5 1
2 1 5 7 6

#### Output:
1 2 5 6 7
-1

#### Explanation:
##### Testcase 1: 
Since, 1, 2, 5, 6, 7 are greater or equal to given K. Also, no element less than K is present in the array.

##### Your Task:
Since this is a function problem, you don't need to take any input. Just complete the provided greaterKSorted and smallerKSorted functions that takes two input one is array and second is K.

#### Constraints:
*1 <= T <= 100*
*1 <= N <= 103*
*1 <= K <= 106*
*1 <= A[i] <= 106*

#### Topic Tags
*set Map Data Structures*