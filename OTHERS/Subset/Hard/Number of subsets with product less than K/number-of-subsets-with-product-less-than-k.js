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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.numOfSubsets(arr, n, k);
        console.log(res);
        
        console.log("~");
    }
}

//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
*/

class Solution{
    numOfSubsets(arr,N, K){
        const computeSubsetProducts = nums => {
            let subsetProducts = [], n = nums.length;
            for (let m = 0; m < (1 << n); m++) {
                let product = 1;
                for (let i = 0; i < n; i++) {
                    if (m & (1 << i)) product *= nums[i];
                }
                subsetProducts.push(product);
            }
            return subsetProducts
        }
        let mid = Math.floor(N / 2), left = arr.slice(0, mid), right = arr.slice(mid);
        let leftProd = computeSubsetProducts(left), rightProd = computeSubsetProducts(right);
        rightProd.sort((a, b) => a - b);
        
        let count = 0;
        for (let product of leftProd) {
            if (product > K) continue;
            let low = 0, high = rightProd.length - 1;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (product * rightProd[mid] <= K) low = mid + 1;
                else high = mid - 1;
            }
            count += low;
        }
        return count - 1;
    }
}