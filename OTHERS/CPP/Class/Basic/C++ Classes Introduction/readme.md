# C++ Classes Introduction

**Difficulty:** Basic   **Accuracy:** 65.52%    **Submissions:** 8K+    **Points:** 1

Create class named CollegeCourse with fields courseID, grade, credits, gradePoints and honorPoints. Calculate honorpoints as the product of gradepoints and credits. GradePoints are calculated as (A-10),(B-9),(C-8),(D-7),(E-6) & (F-5).

Class CollegeCourse contains following functions:
1. **set_CourseId( string CID):** sets courseId
2. **set_Grade(char g):** sets grade equal to g
3. **set_Credit(int cr):** sets credits equal to cr 
4. **calculateGradePoints(char g):** returns gradePoint(int)
5. **calculateHonorPoints(int gp,int cr):** return honorPoint (float)
6. **display():** prints gradePoint and honorPoint

#### Note: Grades are not case sensitive.

#### Examples :

#### Input : 
CSN-206 A 4

#### Output:
10 40

#### Input: 
ECE-500 d 3

#### Output: 
7 21

#### Expected Complexities:
**Time Complexity:** O(1)
**Auxiliary Space:** O(1)

#### Constraints:
*1<=CID.length()<=100*
*'A'<=g<='F'*
*1<=cr<=4*

#### Topic Tags:
*CPP OOP Class*

#### Related Articles:
[*C Classes And Objects*](https://www.geeksforgeeks.org/c-classes-and-objects/)
