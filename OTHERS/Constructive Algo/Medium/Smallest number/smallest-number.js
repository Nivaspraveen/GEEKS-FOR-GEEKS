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

        let pp1 = readLine().split(" ").map(Number);
        let s = pp1[0];
        let d = pp1[1];

        let obj = new Solution();
        let res = obj.smallestNumber(s, d);
        console.log(res);
    }
}

class Solution {
    /**
    * @param number s
    * @param number d

    * @returns string
    */
    smallestNumber(s, d) {
        if (s > 9 * d) return '-1';
        let result = new Array(d).fill(0);
        for (let i = d - 1; i >= 0; i--) {
            if (s > 9) {
                result[i] = 9;
                s -= 9;
            } else {
                result[i] = s;
                s = 0;
            }
        }
        if (result[0] === 0 && d > 1) {
            result[0] = 1;
            for (let i = 1; i < d; i++) {
                if (result[i] > 0) {
                    result[i]--;
                    break;
                }
            }
        }
        return result.join('');
    }
}
