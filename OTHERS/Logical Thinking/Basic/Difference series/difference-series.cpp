#include<bits/stdc++.h> 
using namespace std;

class Solution {
public:
    int differenceSeries(int N) {
        return 2 * N * N + N;
    }
};

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        cin >> N;

        Solution ob;
        int ans = ob.differenceSeries(N);
        cout << ans << endl;
    
        cout << "~" << "\n";
    }
    return 0;
}