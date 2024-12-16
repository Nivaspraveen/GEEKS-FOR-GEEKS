// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// User function Template for C++

class Solution{
public:
    int isPossible(int N){
        int M = 100 - N;
        if (M < 0) return 0;
        
        for (int x = 0; x <= M / 3; x++) {
            if ((M - 3 * x) % 7 == 0) return 1;
        }
        if (M >= 21) return 1;
        return 0;
    }
};

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin >> N;
        
        Solution ob;
        cout<<ob.isPossible(N)<<"\n";
    
        cout << "~" << "\n";
    }
    return 0;
}