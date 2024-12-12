//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

//User function Template for C++

/*Function to count number of characters 
* to make s1 and s2 equal
* s1 : first string
* s2 : second string
*/
class Solution{
    public:
    int countChars(string s1, string s2){
        vector<int> freq1(26, 0), freq2(26, 0);
        for (char c : s1) freq1[c - 'a']++;
        for (char c : s2) freq2[c - 'a']++;
        
        int deletions = 0;
        for (int i = 0; i < 26; i++) deletions += abs(freq1[i] - freq2[i]);
        return deletions;
    }
};

int main() {
	
	int testcase;
	
	cin >> testcase;
	
	while(testcase--){
	    
	    // taking string input
	    string s1, s2;
	    cin >> s1 >> s2;
	    Solution obj;
	    cout << obj.countChars(s1, s2) << endl;
	
        cout << "~" << "\n";
    }
	
	return 0;
}