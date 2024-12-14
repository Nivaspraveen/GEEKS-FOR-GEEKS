#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:
    int cppIntType() {
        int value;
        cin >> value;
        return value;
    }
    
    char cppCharType() {
        char value;
        cin >> value;
        return value;
    }
    
    float cppFloatType() {
        float value;
        cin >> value;
        return value;
    }
};

int main() {
    int t;
    cin >> t;
    while (t--) {
        Solution ob;
        cout << ob.cppIntType() << endl;
        cout << ob.cppCharType() << endl;
        cout << ob.cppFloatType() << endl;
    
        cout << "~" << "\n";
    }
    return 0;
}