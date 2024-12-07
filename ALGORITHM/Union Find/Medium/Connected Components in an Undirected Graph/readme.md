**Connected Components in an Undirected Graph**

**Difficulty:** Medium  **Accuracy:** 33.26%    **Submissions:** 1K+    **Points:** 4

Given an undirected graph edges, the objective is to return a list of all connected components. Each connected component should be represented as a list of its vertices, with all components returned in a collection where each component is listed separately.

*Examples:*

**Input:** e=3, v=5, edges = [{0, 1},{2, 1},{3, 4}]

**Output:** [[0, 1, 2],[3, 4]]

**Explanation:** 
https://media.geeksforgeeks.org/wp-content/uploads/20220905132251/graph.jpg

*Example 2:*

**Input:** e=5, v=7, edges=[{0, 1},{6, 1},{2, 4},{2, 3},{3, 4}]

**Output:** [[0, 1, 6],[2, 3, 4],[5]]

**Constraints:**

*0 <= edges[i][0], edges[i][1] < v*

*1 ≤ v, e ≤ 105*

**Expected Complexities:**

*Time Complexity:* O((V + E) log V)

*Auxiliary Space:* O(V + E)

**Topic Tags:**
*Graph   union-find  DFS BFS*

**Related Articles:**
[*Connected Components In An Undirected Graph*](https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/)
