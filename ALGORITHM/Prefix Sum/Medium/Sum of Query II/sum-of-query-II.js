process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let n = parseInt(readLine());

        let arr = new Array(n);
        let input_arr = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_arr[i];
        }

        let q = parseInt(readLine());

        let queries = new Array(2 * q);
        let input_queries = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < 2 * q; i++) {
            queries[i] = input_queries[i];
        }

        let obj = new Solution();
        let res = obj.querySum(n, arr, q, queries);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
    
        console.log("~");
    }
}

class Solution {
    /**
    * @param number n
    * @param number[] arr
    * @param number q
    * @param number[] queries

    * @returns number[]
    */
    querySum(n, arr, q, queries) {
        const prefixSum = new Array(n + 1).fill(0);
        for (let i = 1; i <= n; i++) prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
        
        const result = [];
        for (let i = 0; i < q; i++) {
            const l = queries[2 * i], r = queries[2 * i + 1];
            const sum = prefixSum[r] - prefixSum[l - 1];
            result.push(sum);
        }
        return result;
    }
}