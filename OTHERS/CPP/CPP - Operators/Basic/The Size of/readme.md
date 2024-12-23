# The Size of

**Difficulty:** Basic   **Accuracy:** 60.1% **Submissions:** 24K+   **Points:** 1

Now, we'll learn the use of sizeof operator in CPP. This operator is a unary type--it takes only one operand as input and outputs the size in bytes of the operand.

###### You will be given four different variables of different data types: a (int), b (float), c (double), l (long long), d (string). Your task is to do step-wise operations as given below:
    1. Divide b by c.
    2. Divide b by a.
    3. Divide c by a.
    4. Add result at step 3 with l.
    5. Print the sizeof(result) of each step in a single line. The outputs should be separated by spaces.
    6. Print the sizeof(d) and sizeof(d[3]) separated by a space on a new line.

#### Example:

### Input:
a = 1 
b = 2
c = 3
l = 5
d = gfgc

### Output:
4 8 4 8
32 1

##### User Task: 
Your task is to complete the provided function . 

#### Constraints:
*1 <= a, b, c <= 106*
*1 <= l <= 1018*

#### Topic Tags:
*cpp-operator*

#### Related Articles:
[*Sizeof Operator C*](https://www.geeksforgeeks.org/sizeof-operator-c/)