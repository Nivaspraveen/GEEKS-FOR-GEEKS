#include<bits/stdc++.h>
using namespace std;

class Solution {
  public:
    vector<int> solveQueries(int N, int num, vector<int> &A, vector<vector<int>> &Q) {
        vector<unordered_map<int, int>> freq(N);
        vector<int> results;
        
        unordered_map<int, int> countMap;
        
        for (int i = N - 1; i >= 0; i--) {
            countMap[A[i]]++;
            freq[i] = countMap;
        }
        
        
        for (const auto& query: Q) {
            int L = query[0], R = query[1], K = query[2], count = 0;
            for (int i = L; i <= R; i++) {
                if (freq[i][A[i]] == K) count++;
            }
            results.push_back(count);
        }
        return results;
    }
};

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        int num;
        cin>>num;
        vector<int> A(N);
        for(int i=0;i<N;i++){
            cin>>A[i];
        }
        vector<vector<int>> Q(num, vector<int>(3));
        for(int i=0;i<num;i++){
            for(int j=0;j<3;j++){
                cin>>Q[i][j];
            }
        }
        Solution obj;
        vector<int> res = obj.solveQueries(N, num, A, Q);
        
        for(auto ele:res){
            cout<<ele<<" ";
        }
        cout<<endl;
    
        cout << "~" << "\n";
    }
}   