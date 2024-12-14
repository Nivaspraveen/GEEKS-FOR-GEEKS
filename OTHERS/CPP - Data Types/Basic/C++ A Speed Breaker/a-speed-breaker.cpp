// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// User function Template for C++
class Solution {
  public:
    void speedBreaker(double a, int b){
        cout << fixed << setprecision(b) << a << endl;
    }
};

int main() {
    int t;
    cin >> t;
    while (t--) {
        double a;
        cin >> a;
        int b;
        cin >> b;
        Solution ob;
        ob.speedBreaker(a,b);
    
        cout << "~" << "\n";
    }
    return 0;
}