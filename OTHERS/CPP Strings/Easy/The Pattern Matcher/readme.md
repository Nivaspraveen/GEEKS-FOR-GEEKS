# The Pattern Matcher

**Difficulty:** Easy    **Accuracy:** 25.96%    **Submissions:** 15K+   **Points:** 2

*All right! Let's implement some pattern-matching using CPP strings.*

You are given a string s of **x** and **y**. You need to verify whether the string follows the pattern **xnyn**. That is the string is valid only if equal number of ys follow equal number of xs.
As an example: **xxyyxxyy** is valid. **xy** is valid. **xxyyx** is invalid. **xxxyyyxxyyxy** is valid.

#### Example 1:

### Input:
s = xxyy

### Output:
1

#### Example 2:

### Input:
s = xyx

### Output:
0

#### Your Task:
Since this is a function problem, you don't need to take any input. Just complete the function follPatt(string s) that outputs 1 if string is valid, else it outputs 0. In a new line, print 1 if the string is valid else print 0.

### Expected Time Complexity:O(|s|)
### Expected Auxilary Space:O(1)

#### Constraints:
*1 <= |s| <=100*

#### Topic Tags:
cpp-strings

#### Related Articles:
[*Check String Follows Anbn Pattern Not*](https://www.geeksforgeeks.org/check-string-follows-anbn-pattern-not/)