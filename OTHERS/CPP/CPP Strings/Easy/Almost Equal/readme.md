# Almost Equal

**Difficulty:** Easy    **Accuracy:** 23.96%    **Submissions:** 16K+   **Points:** 2

Given two strings s1 and s2 consisting of only lowercase characters whose anagrams are almost equal. The task is to count the number of characters which needs to be edited(delete) to make s1 equal to s2.

#### Example:

### Input:
s1 = madame
s2 = madam

### Output:
1

### Explanation:
String s1 = madame, string s2 = madam. character 'e' in first string needs to be deleted to make s1 equal to s2.
 

##### Your Task:
Print the count of characters needed to delete to make s1 and s2 equal. Complete the given function.

### Expected Time Complexity: O(max(|s1|,|s2|))
### Expected Auxilary Space: O(|s1| + |s2|) 

#### Constraints:
*1 <= s1, s2 <= 104*

#### Topic Tags:
cpp-strings

#### Related Articles:
[*Minimum Number Of Manipulations Required To Make Two Strings Anagram Without Deletion Of Character*](https://www.geeksforgeeks.org/minimum-number-of-manipulations-required-to-make-two-strings-anagram-without-deletion-of-character/)