// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// User function template for C++
class Solution {
    public:
        void print_divisors(int n) {
            vector<int> divisors;
            for (int i = 1; i * i <= n; i++) {
                if (n % i == 0) {
                    divisors.push_back(i);
                    if (i != n / i) divisors.push_back(n / i);
                }
            }
            sort(divisors.begin(), divisors.end());
            for (size_t i = 0; i < divisors.size(); i++) {
                cout << divisors[i];
                if (i != divisors.size() - 1) cout << " ";
            }
        }
};

int main() {
    int T;
    cin >> T;
    while (T--) {
        int n;
        cin >> n;
        Solution ob;
        ob.print_divisors(n);
        cout << endl;
    
cout << "~" << "\n";
}
    return 0;
}