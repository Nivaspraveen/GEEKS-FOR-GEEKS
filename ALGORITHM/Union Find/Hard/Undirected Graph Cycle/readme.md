**Undirected Graph Cycle**

**Difficulty:** Medium  **Accuracy:** 30.13%    **Submissions:** 489K+  **Points:** 4

Given an undirected graph with V vertices labelled from 0 to V-1 and E edges, check whether the graph contains any cycle or not. The Graph is represented as an adjacency list, where adj[i] contains all the vertices that are directly connected to vertex i.

**NOTE: The adjacency list represents undirected edges, meaning that if there is an edge between vertex i and vertex j, both j will be adj[i] and i will be in adj[j].**

*Examples:*

**Input:** adj = [[1], [0,2,4], [1,3], [2,4], [1,3]] 

**Output:** 1

**Explanation:** 

https://media.geeksforgeeks.org/img-practice/PROD/addEditProblem/700219/Web/Other/891791f9-1abb-45b1-80f2-7af46d73dcd2_1685086491.png

1->2->3->4->1 is a cycle.

**Input:** adj = [[], [2], [1,3], [2]]

**Output:** 0

**Explanation:** 

https://media.geeksforgeeks.org/img-practice/PROD/addEditProblem/700219/Web/Other/d8cbd97e-406e-4f50-a38c-6a58747df876_1685086491.png

No cycle in the graph.

**Constraints:**
*1 ≤ adj.size() ≤ 105*

**Expected Complexities:**

**Time Complexity:** O(n)

**Auxiliary Space:** O(n)

**Company Tags:**
*Flipkart    Amazon  Microsoft   Samsung MakeMyTrip  Oracle  Adobe*

**Topic Tags:**
*DFS Graph   union-find  Data Structures Algorithms*

**Related Interview Experiences:**
[*Makemytrip Interview Experience Set 13 On Campus For Full Time*](https://www.geeksforgeeks.org/makemytrip-interview-experience-set-13-on-campus-for-full-time/)

**Related Articles:**
[*Detect Cycle Undirected Graph*](https://www.geeksforgeeks.org/detect-cycle-undirected-graph/)
