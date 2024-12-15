//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

//User function Template for C++

class Solution{
    public:
    void follPatt(string s) {
        int i = 0;
        while (i < s.length()) {
            int x = 0, y = 0;
            while (i < s.length() && s[i] == 'x') {
                x++;
                i++;
            }
            while (i < s.length() && s[i] == 'y') {
                y++;
                i++;
            }
            if (x != y) {
                cout << 0 << endl;
                return;
            }
        }
        cout << 1 << endl;
    }
};

int main() {
	int t;
	cin>>t;

	while(t--) {
	    
	    string s;
	    cin>>s;
	    Solution obj;
	    //function call
	    obj.follPatt(s);
	   
        cout << "~" << "\n";
    }
	return 0;
}