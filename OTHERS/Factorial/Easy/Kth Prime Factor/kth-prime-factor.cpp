// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// User function Template for C++

class Solution{
public:
    int kthPrime(int n, int k){
        vector<int> primeFactors;
        while (n % 2 == 0) {
            primeFactors.push_back(2);
            n /= 2;
        }
        for (int i = 3; i * i <= n; i += 2) {
            while (n % i == 0) {
                primeFactors.push_back(i);
                n /= i;
            }
        }
        if (n > 2) primeFactors.push_back(n);
        if (k <= primeFactors.size()) return primeFactors[k - 1];
        else return -1;
    }
};

int main(){
    int t;
    cin>>t;
    while(t--){
        int n, k;
        cin>>n>>k;
        
        Solution ob;
        cout<<ob.kthPrime(n, k)<<"\n";
    
        cout << "~" << "\n";
    }
    return 0;
}