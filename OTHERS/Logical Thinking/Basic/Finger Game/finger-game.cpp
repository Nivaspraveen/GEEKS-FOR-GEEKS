#include<bits/stdc++.h> 
using namespace std; 

class Solution {
public:
    int fingerCount(int N) {
        int pattern[] = { 1, 2, 3, 4, 5, 4, 3, 2 };
        int position = (N - 1) % 8;
        return pattern[position];
    }
};

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        cin >> N;
      
        Solution ob;
        int ans  = ob.fingerCount(N);
        cout << ans << endl;
    
        cout << "~" << "\n";
    }
    return 0;
}