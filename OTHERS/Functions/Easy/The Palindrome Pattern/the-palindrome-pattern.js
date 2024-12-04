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

        let arr = [];
        ai = readLine().trim().split(' ').map((x) => parseFloat(x));
        for (let i = 0; i < n * n; i += n) {
            let j = i, k = n;
            let a = [];
            while (k--) {
                a.push(ai[j]);
                j++;
            }
            arr.push(a);
        }
        let obj = new Solution();
        let res = obj.pattern(arr);
        console.log(res);
        console.log("~");
    }
}

class Solution {
    /**
    * @param number n
    * @param number[][] arr

    * @returns string
    */
    pattern(arr) {
        const n = arr.length;
        for (let i = 0; i < n; i++) {
            let isPalindrome = true;
            for (let j = 0; j < n / 2; j++) {
                if (arr[i][j] !== arr[i][n - j - 1]) {
                    isPalindrome = false;
                    break;
                }
            }
            if (isPalindrome) return `${i} R`;
        }
        for (let j = 0; j < n; j++) {
            let isPalindrome = true;
            for (let i = 0; i < n / 2; i++) {
                if (arr[i][j] !== arr[n - i - 1][j]) {
                    isPalindrome = false;
                    break;
                }
            }
            if (isPalindrome) return `${j} C`;
        }
        return '-1';
    }
}
