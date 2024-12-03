#include <bits/stdc++.h>
using namespace std;

// User function template for C++

class Solution {
  public:
    vector<int> prefixAvg(vector<int> &arr) {
        vector<int> result(arr.size());
        long long running_sum = 0;
        
        for (int i = 0; i < arr.size(); i++) {
            running_sum += arr[i];
            result[i] = running_sum / (i + 1);
        }
        return result;
    }
};

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream s1(input);
        int num;
        while (s1 >> num) {
            arr.push_back(num);
        }
        Solution ob;
        vector<int> ans = ob.prefixAvg(arr);

        for (auto x : ans) {
            cout << x << " ";
        }
        cout << "\n";
        cout << "~" << endl;
    }
    return 0;
}