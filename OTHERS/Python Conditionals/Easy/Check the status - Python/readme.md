**Check the status - Python**

**Difficulty:** Easy    **Accuracy:** 20.06%    **Submissions:** 104K+  **Points:** 2

Given two integer variables a and b, and a boolean variable flag. The task is to check the status and return accordingly.

Return True for the following cases:

Either a or b (not both) is non-negative and the flag is false.

Both a and b are negative and the flag is true.

Otherwise, return false.

*Example:* 

**Input:**

a = 1

b = -1

flag = False

**Output:**
True

**Explanation:**
Since a and b are positive and 
negative respectively and flag
is False, so return True.

*Example:* 

**Input:**

a = -182

b = -9121

flag = True

**Output:**
True
**Explanation:**
Since a and b are negative and 
negative respectively and flag
is True, so return True.

**Your Task:**
This is a function problem. Complete the function checkStatus() and return True or False according to the parameters.

**Constraints:**
*-106 <= a, b <= 106*

**Expected time complexity:** O(1)

**Expected auxiliary space:** O(1)

**Topic Tags:**
*python-conditionals python*

**Related Articles:** [*Python If-Else*]https://www.geeksforgeeks.org/python-if-else/