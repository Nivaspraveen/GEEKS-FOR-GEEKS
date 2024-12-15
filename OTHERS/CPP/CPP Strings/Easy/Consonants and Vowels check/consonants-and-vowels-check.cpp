//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

void checkString(string s);

//User function Template for C++

void checkString(string s) {
    int v = 0;
    int c = 0;
    string vowels = "aeiou";
    for (char c : s) {
        if (vowels.find(c) != string::npos) v++; 
        else if (c >= 'a' && c <= 'z') c++;
    }
    
    if (v > c)
        cout << "Yes";
    else if (v < c)
        cout << "No";
    else
        cout << "Same";
    
    cout << endl;
}

int main() {
	int t;
	cin>>t;
	cin.ignore();
	while(t--)
	{
	    
	    string s;
	    getline(cin,s);
	    
	    //function call
	    checkString(s);
	   
	
        cout << "~" << "\n";
    }
	return 0;
}