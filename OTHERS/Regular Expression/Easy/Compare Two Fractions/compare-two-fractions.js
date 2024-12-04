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
        let str = readLine();
        let obj = new Solution();
        let res = obj.compareFrac(str);
        console.log(res);
    
        console.log("~");
    }
}

class Solution {
    /**
    * @param string str

    * @returns string
    */
    compareFrac(str) {
        const [f1, f2] = str.split(', '), 
            [a, b] = f1.split('/').map(Number), 
            [c, d] = f2.split('/').map(Number), 
            value1 = a / b, 
            value2 = c / d;
        
        if (value1 > value2) return f1;
        else if (value1 < value2) return f2;
        else return 'equal';
    }
}