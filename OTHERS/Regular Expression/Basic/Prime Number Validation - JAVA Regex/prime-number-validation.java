import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            int N = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.isPrime(N);
            System.out.println(ans);
        }
    }
}

class Solution {
    public int isPrime(int N) {
        if (N <= 1) return 0;
        if (N == 2) return 1;
        for (int i = 2; i <= N / 2; i++) {
            if (N % i == 0) return 0;
        }
        return 1;
    }
}