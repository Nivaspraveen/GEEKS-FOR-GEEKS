# Average Count Array

**Difficulty:** Basic   **Accuracy:** 49.96%    **Submissions:** 11K+   **Points:** 1

Given an array arr[] and an integer x. You have to calculate the average for each element arr[i] and x and find out whether that number exists in the array. Do it for all the elements of the array and store the count result in another array for each index how many occurrences of average are present in the array.

#### Note: Always take the floor value of the average.

#### Examples:

#### Input : 
arr[] = [2, 4, 8, 6, 2] and x = 2

#### Output : 
[2, 0, 0, 1, 2]

#### Explanation: 
We take x = 2 and take average with arr[0] whch is equal to 2. We found 2 resides in array at two positions (1st and 5th element) thus storing 2 in another array at 0th index. Similarly do for all elements and store the count in second array.

#### Input : 
arr[] = [9, 5, 2, 4, 0, 3] and x = 3 

#### Output : 
[0, 1, 1, 1, 0, 1] 

#### Explanation: 
The average of 9 and 3 is 6 and no occurence of 6 is present in array so 0. And so on. 

#### Expected Time Complexity: O(n).
#### Expected Auxiliary Space: O(n).

#### Constraints:
*1 ≤ arr.size() ≤ 106*
*1 ≤ x ≤ 105*
*1 ≤ arr[i] ≤ 105*

#### Topic Tags:
*Arrays  Mathematical    logical-thinking    Data Structures Algorithms*

#### Related Articles:
[*Count Occurrences Of The Average Of Array Elements With A Given Number*](https://www.geeksforgeeks.org/count-occurrences-of-the-average-of-array-elements-with-a-given-number/)