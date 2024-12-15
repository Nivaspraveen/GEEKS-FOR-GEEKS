//Initial Template for C++

// CPP code to check divisibility of number
#include <bits/stdc++.h>
using namespace std;

// Prorotype of function
void isDivisibleByPrime(int);

//User function Template for C++

// Function to check divisibility
// N is the input integer

void isDivisibleByPrime(int n){
    if (n % 11 == 0) cout << "Eleven\n";
    else if (n % 3 == 0) cout << "Three\n";
    else if (n % 2 == 0) cout << "Two\n";
    else cout << "-1\n";
}

// Driver Code to test above function
int main() {
    
    int t;
    cin >> t;
    
    while(t--){
        int n;
        cin >> n;
        
        isDivisibleByPrime(n);
        
    
        cout << "~" << "\n";
    }
    
	return 0;
}