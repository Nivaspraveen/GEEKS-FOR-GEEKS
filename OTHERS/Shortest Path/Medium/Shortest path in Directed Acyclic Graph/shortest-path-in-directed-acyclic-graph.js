// Input Handling
function main() {
    const input = require('readline').createInterface({
        input : process.stdin,
        output : process.stdout
    });

    let t;
    let inputs = [];
    input.on('line', line => { inputs.push(line.trim()); });

    input.on('close', () => {
        let idx = 0;
        t = parseInt(inputs[idx++]);
        while (t--) {
            const [n, m] = inputs[idx++].split(' ').map(Number);
            let edges = [];
            for (let i = 0; i < m; i++) {
                edges.push(inputs[idx++].split(' ').map(Number));
            }

            const solution = new Solution();
            const result = solution.shortestPath(n, m, edges);
            console.log(result.join(' '));
            console.log("~");
        }
    });
}

main();


class Solution {
    shortestPath(V, E, edges) {
        // to be added
    }
}