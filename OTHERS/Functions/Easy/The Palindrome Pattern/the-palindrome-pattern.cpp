#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:

    string pattern(vector<vector<int>> &arr) {
        int n = arr.size();
        for (int i = 0; i < n; i++) {
            bool isPalindrome = true;
            for (int j = 0; j < n / 2; j++) {
                if (arr[i][j] != arr[i][n - j -1]) {
                    isPalindrome = false;
                    break;
                }
            }
            if (isPalindrome) return to_string(i) + " R";
        }
        for (int j = 0; j < n; j++) {
            bool isPalindrome = true;
            for (int i = 0; i < n / 2; i++) {
                if (arr[i][j] != arr[n - i - 1][j]) {
                    isPalindrome = false;
                    break;
                }
            }
            if (isPalindrome) return to_string(j) + " C";
        }
        return "-1";
    }
};

int main() {

    int t, n, i, j, flag, k;
    cin >> t;

    while (t--) {
        cin >> n;
        vector<vector<int>> a(n, vector<int>(n));

        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++)
                cin >> a[i][j];
        }
        Solution ob;
        cout << ob.pattern(a) << endl << "~" << endl;
    }
    return 0;
}