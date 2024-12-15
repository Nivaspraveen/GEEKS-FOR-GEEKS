//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

void logicOp(int a, int b);

//User function Template for C++

void logicOp(int a, int b) {
    bool andResult = a && b, orResult = a || b, notResult = !a && !b;
    cout << andResult << " " << orResult << " " << notResult << endl;
}

int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    int a,b;
	    cin>>a>>b;
	    logicOp(a,b);
	    
	
        cout << "~" << "\n";
    }
	return 0;
}