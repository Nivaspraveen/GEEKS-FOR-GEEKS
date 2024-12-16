// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// User function Template for C++

class Solution{
public:
    int minStep(int H, int U, int D){
        if (U >= H) return 1;
        int eff_climb = U - D;
        int rem_height = H - U;
        if (rem_height <= 0) return 1;
        int add_steps = (rem_height + eff_climb - 1) / eff_climb;
        return 1 + add_steps;
    }
};

int main(){
    int t;
    cin >> t;
    while(t--){
        int H, U, D;
        cin >> H >> U >> D;
        
        Solution ob;
        cout<<ob.minStep(H, U, D)<<"\n";
    
        cout << "~" << "\n";
    }
    return 0;
}