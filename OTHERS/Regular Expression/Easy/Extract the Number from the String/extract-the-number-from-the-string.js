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
        let S = readLine();
        let obj = new Solution();
        let res = obj.ExtractNumber(S);
        console.log(res);
        console.log("~");
    }
}

class Solution {
    /**
    * @param string S

    * @returns number
    */
    ExtractNumber(sentence) {
        let words = sentence.split(' '), maxNum = -1;
        for (let word of words) {
            if (!isNaN(word) && !word.includes('9')) {
                let num = BigInt(word);
                if (num > maxNum) maxNum = num;
            }
        }
        return maxNum === -1 ? -1 : maxNum.toString();
    }
}