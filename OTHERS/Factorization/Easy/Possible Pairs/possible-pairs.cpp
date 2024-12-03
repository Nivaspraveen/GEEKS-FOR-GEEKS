// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// User function Template for C++

class Solution{
public:
    int gcd(int a, int b) {
        while (b != 0) {
            int t = b;
            b = a % b;
            a = t;
        }
        return a;
    }
    
    int pairCount(int x, int y) {
        if (y % x != 0) return 0;
        int n = y / x, count = 0;
        if (n == 1) return 1;
        for (int i = 1; i * i <= n; ++i) {
            if (n % i == 0) {
                int a = i, b = n / i;
                if (gcd(a, b) == 1) count += 2;
            }
        }
        return count;
    }
};

int main(){
    int t;
    cin>>t;
    while(t--){
        int x, y;
        cin>>x>>y;
        
        Solution ob;
        cout<<ob.pairCount(x, y)<<endl;
    
        cout << "~" << "\n";
    }
    return 0;
}