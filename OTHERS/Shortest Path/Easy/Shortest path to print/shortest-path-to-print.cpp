#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:
    vector<string> printPath(string str) {
        unordered_map<char, pair<int, int>> positions;
        for (int i = 0; i < 26; i++) positions['A' + i] = {i / 5, i % 5};
        
        int currRow = 0, currCol = 0;
        vector<string> result;
        
        for (char c : str) {
            pair<int, int> target = positions[c];
            int targetRow = target.first, targetCol = target.second;
            
            if (currRow == 5 && targetRow != 5) { 
                for (int i = 0; i < currCol; ++i) result.push_back("LEFT");
                currCol = 0; 
            }
            
            if (targetRow == 5 && currRow != 5) {
                for (int i = 0; i < currCol; ++i) result.push_back("LEFT");
                currCol = 0; 
            }
            
            if (currCol < targetCol) {
                for (int i = 0; i < targetCol - currCol; ++i) result.push_back("RIGHT");
            } else if (currCol > targetCol) {
                for (int i = 0; i < currCol - targetCol; ++i) result.push_back("LEFT");
            }
            
            if (currRow < targetRow) {
                for (int i = 0; i < targetRow - currRow; ++i) result.push_back("DOWN");
            } else if (currRow > targetRow) {
                for (int i = 0; i < currRow - targetRow; ++i) result.push_back("UP");
            }
            
            result.push_back("OK");
            currRow = targetRow;
            currCol = targetCol;
        }
        return result;
    }
};

int main() {
    int t;
    cin >> t;
    while (t--) {
        string S;
        cin >> S;

        Solution ob;
        vector<string> ans = ob.printPath(S);
        for (auto u : ans) cout << u << " ";
        cout << endl;
    
        cout << "~" << "\n";
     }
    return 0;
}