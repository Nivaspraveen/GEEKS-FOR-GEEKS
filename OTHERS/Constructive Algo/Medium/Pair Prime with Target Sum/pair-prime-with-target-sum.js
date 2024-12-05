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

        let obj = new Solution();
        let res = obj.getPrimes(n);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
    }
}

class Solution {
    /**
    * @param number n

    * @returns number[]
    */
    getPrimes(n) {
        const generatePrimes = limit => {
            const isPrime = Array(limit + 1).fill(true);
            isPrime[0] = isPrime[1] = false;
            
            for (let i = 2; i * i <= limit; i++) {
                if (isPrime[i]) {
                    for (let j = i * i; j <= limit; j += i) isPrime[j] = false;
                }
            }
            return isPrime;
        };
        const isPrime = generatePrimes(n);
        for (let i = 2; i <= n / 2; i++) {
            const j = n - i;
            if (isPrime[i] && isPrime[j]) return [i, j];
        }
        return [-1, -1];
    }
}