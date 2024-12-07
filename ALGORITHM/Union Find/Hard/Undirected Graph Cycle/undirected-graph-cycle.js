// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let V = parseInt(input_line[0]);
        let E = parseInt(input_line[1]);

        let adj = new Array(V);
        for (let i = 0; i < V; i++) {
            adj[i] = new Array();
        }
        for (let i = 0; i < E; i++) {
            input_line = readLine().split(' ');
            let x = parseInt(input_line[0]);
            let y = parseInt(input_line[1]);
            adj[x].push(y);
            adj[y].push(x);
        }

        let obj = new Solution();
        let ans = obj.isCycle(adj);
        if (ans)
            ans = 1;
        else
            ans = 0;
        console.log(ans);

        console.log("~");
    }
}

// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
 */
class Solution {
    // Function to detect cycle in an undirected graph.
    isCycle(adj) {
        const V = adj.length, visited = new Array(V).fill(false);
        const dfs = (node, parent) => {
            visited[node] = true;
            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    if (dfs(neighbor, node)) return true;
                }
                else if (neighbor !== parent) return true;
            }
            return false;
        };
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                if (dfs(i, -1)) return true;
            }
        }
        return false;
    }
}