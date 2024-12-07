// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// User function Template for C++
class Solution {
  public:
    vector<vector<string>> mergeDetails(vector<vector<string>>& details) {
        unordered_map<string, string> parent; 
        unordered_map<string, string> emailToName; 
        unordered_map<string, unordered_set<string>> unions;
        
        for (const auto& detail : details) { 
            string name = detail[0]; 
            for (int i = 1; i < detail.size(); ++i) { 
                string email = detail[i]; 
                parent[email] = email; 
                emailToName[email] = name;
            }
        }
        
        function<string(const string&)> find = [&](const string& email) { 
            if (parent[email] != email) parent[email] = find(parent[email]);
            return parent[email];
        };
        
        auto unionSet = [&](const string& email1, const string& email2) { 
            string root1 = find(email1); 
            string root2 = find(email2); 
            if (root1 != root2) parent[root1] = root2;
        };
        
        for (const auto& detail : details) { 
            for (int i = 2; i < detail.size(); ++i) unionSet(detail[1], detail[i]);
        }
        
        for (const auto& detail : details) { 
            for (int i = 1; i < detail.size(); ++i) { 
                string root = find(detail[i]); 
                unions[root].insert(detail[i]);
            }
        }
        
        vector<vector<string>> result; 
        for (const auto& group : unions) { 
            vector<string> emails(group.second.begin(), group.second.end()); 
            sort(emails.begin(), emails.end()); 
            emails.insert(emails.begin(), emailToName[group.first]); 
            result.push_back(emails);
        }
        
        sort(result.begin(), result.end()); 
        return result;
    }
};

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<vector<string>> adj;

        for (int i = 0; i < n; i++) {
            vector<string> temp;
            string s;
            cin >> s;
            temp.push_back(s);
            int x;
            cin >> x;

            for (int j = 0; j < x; j++) {
                string s1;
                cin >> s1;
                temp.push_back(s1);
            }
            adj.push_back(temp);
        }

        Solution obj;
        vector<vector<string>> res = obj.mergeDetails(adj);
        sort(res.begin(),res.end(),[](const vector<string>& a, const vector<string>& b){
            return a[0]<=b[0];
        });
        cout << "[";
        for (int i = 0; i < res.size(); ++i) {
            cout << "[";
            for (int j = 0; j < res[i].size(); j++) {
                if (j != res[i].size() - 1)
                    cout << res[i][j] << ","
                         << " ";
                else
                    cout << res[i][j];
            }
            if (i != res.size() - 1)
                cout << "], ";
            else
                cout << "]";
        }
        cout << "]"
             << "\n";
    
        cout << "~" << "\n";
    }
}