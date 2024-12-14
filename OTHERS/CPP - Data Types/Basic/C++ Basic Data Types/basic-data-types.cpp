// Initial template for C++

#include <bits/stdc++.h>
using namespace std;

// User functiom template for C++

class Solution {
  public:
    int BasicDataType(string s) {
        if (s.length() == 1 && !isdigit(s[0])) return sizeof(char);
        
        bool isInteger = true;
        for (char c : s) {
            if (!isdigit(c)) {
                isInteger = false;
                break;
            }
        }
        
        if (isInteger) return sizeof(int);
        
        int dotCount = 0, digitAfterDot = 0;
        bool isValidNumber = true;
        
        for (int i = 0; i < s.length(); ++i) {
            if (s[i] == '.') dotCount++;
            else if (!isdigit(s[i])) {
                isValidNumber = false;
                break;
            }
            else if (dotCount == 1) digitAfterDot++;
        }
        
        if (isValidNumber && dotCount == 1) {
            if (digitAfterDot < 6) return sizeof(float); 
            else return sizeof(double); 
        }
        
        if (isValidNumber && dotCount == 1) return sizeof(float);
        return 0;
    }
};

int main() {
    int t;
    cin >> t;
    while (t--) {
        string S;
        cin >> S;

        Solution ob;
        cout << ob.BasicDataType(S) << endl;
    
        cout << "~" << "\n";
    }
}