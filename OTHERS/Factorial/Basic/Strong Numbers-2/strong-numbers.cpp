#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:
    int isStrong(int N) {
        int factorial[10];
        factorial[0] = 1;
        for (int i = 1; i < 10; i++) factorial[i] = factorial[i - 1] * i;
        int sumOfFact = 0, temp = N;
        while (temp > 0) {
            int digit = temp % 10;
            sumOfFact += factorial[digit];
            temp /= 10;
        }
        return (sumOfFact == N) ? 1 : 0;
    }
};

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        
        cin>>N;

        Solution ob;
        cout << ob.isStrong(N) << endl;
    
        cout << "~" << "\n";
    }
    return 0;
}