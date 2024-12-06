**Container With Most Water**

**Difficulty:** Medium  **Accuracy:** 53.84%    **Submissions:** 49K+   **Points:** 4

Given non-negative integers arr1,arr2,....arrn where each represents a point at coordinate (i, arri). For each i vertical lines are drawn such that the two endpoints of line i is at (i, arri) and (i,0). Find two lines, which together with x-axis form a container, such that it contains the most water.

**Note: In the case of a single verticle line it will not be able to hold water.**

*Examples:*

**Input:** arr[] = [1, 5, 4, 3]

**Output:** 6

**Explanation:** 5 and 3 are distance 2 apart. So the size of the base = 2. Height of container = min(5, 3) = 3. So total area = 3 * 2 = 6.

**Input:** arr[] = [3, 1, 2, 4, 5]

**Output:** 12

**Explanation:** 5 and 3 are distance 4 apart. So the size of the base = 4. Height of container = min(5, 3) = 3. So total area = 4 * 3 = 12.

**Input:** arr[] = [2, 1, 8, 6, 4]

**Output:** 8 

**Explanation:** The indices 2 (height 8) and 4 (height 4) are distance 2 apart. So the size of the base is 2. The height of the container is the minimum of 8 and 4, which is 4. 
Therefore, the total area is 4 * 2 = 8.

**Constraints:**

*1<= arr.size() <=105*

*1<= arr[i] <=105*

**Expected Complexities:**

*Time Complexity:* O(n)

*Auxiliary Space:* O(1)

**Company Tags:**
*Flipkart    Amazon  Google*

**Topic Tags:**
*Arrays  Mathematical    Puzzles Data Structures Algorithms*
