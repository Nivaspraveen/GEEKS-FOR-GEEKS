//User function Template for C++

class Solution {
	public:
		int is_valid(string s){
		    int n = s.length();
		    if (n != 10 && n != 11 && n != 12) return 0;
		    if (n == 10) {
		        if (s[0] == '7' || s[0] == '8' || s[0] == '9') return 1;
		        else return 0;
		    }
		    if (n == 11) {
		        if (s[0] == '0' && (s[1] == '7' || s[1] == '8' || s[1] == '9')) return 1;
		        else return 0;
		    }
		    if (n == 12) {
		        if (s.substr(0, 2) == "91" && (s[2] == '7' || s[2] == '8' || s[2] == '9')) return 1;
		        else return 0;
		    }
		    return 0;
		}
};