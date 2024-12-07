//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        input_line = readLine().split(' ');
        let m = parseInt(input_line[0]);
        input_line = readLine().split(' ');
        let k = parseInt(input_line[0]);
        let operators = []; 
        for(let i=0;i<k;i++)
        {
            input_line = readLine().split(' ');
            let x = parseInt(input_line[0]);
            let y = parseInt(input_line[1]);
            operators.push([x,y]);
        }
        let obj = new Solution();
        let ans = obj.numOfIslands(n, m, operators);
        let s = "";
        for(let i=0 ; i < ans.length ;i++)
        {
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    
        console.log("~");
    }
}

//User function Template for javascript
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number[][]} operators
 * @returns {number[]}
*/

class Solution {
    constructor() {
        this.parent = [];
        this.rank = [];
        this.count = 0;
    }
    
    // Find function with path comparison
    find(x) {
        if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
    
    // Union function with union by rank
    union(x, y) {
        const rootX = this.find(x), rootY = this.find(y);
        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) this.parent[rootY] = rootX;
            else if (this.rank[rootX] < this.rank[rootY]) this.parent[rootX] = rootY;
            else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
            this.count--;
        }
    }
    
    //Function to count the number of islands.
    numOfIslands(rows, cols, operators) {
        this.parent = new Array(rows * cols).fill(-1);
        this.rank = new Array(rows * cols).fill(0);
        this.count = 0;
        
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]],
            results = [],
            visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        
        operators.forEach(([x, y]) => {
            if (visited[x][y]) {
                results.push(this.count);
                return;
            }
            
            visited[x][y] = true;
            this.count++;
            const cellId = x * cols + y;
            this.parent[cellId] = cellId;
            
            directions.forEach(([dx, dy]) => {
                const nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && visited[nx][ny]) {
                    const newCellId = nx * cols + ny;
                    this.union(cellId, newCellId);
                }
            });
            results.push(this.count);
        });    
        return results;
    }
}