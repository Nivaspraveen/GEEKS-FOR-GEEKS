#include<bits/stdc++.h>
using namespace std;

class Solution {
  public:
    string isPrime(int n) {
        
        if (n <= 1) return "No";
        
        for (int i = 2; i <= sqrt(n); i++) {
            if (n % i == 0) return "No";
        }
        return "Yes";
    }
};

int main(){
    int t;
    scanf("%d ",&t);
    while(t--){
        
        int n;
        scanf("%d",&n);
        
        Solution obj;
        string res = obj.isPrime(n);
        
        cout<<res<<"\n";
        
    
        cout << "~" << "\n";
    }
}