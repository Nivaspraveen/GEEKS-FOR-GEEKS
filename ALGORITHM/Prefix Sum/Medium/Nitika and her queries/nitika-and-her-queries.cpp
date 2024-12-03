// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// User function Template for C++

class Solution{
public:
    vector<int> specialXor(int N, int Q, int a[], vector<int> query[]) {
        int totalXor = 0;
        for (int i = 0; i < N; i++) totalXor ^= a[i];
        
        vector<int> prefix(N + 1, 0);
        for (int i = 1; i <= N; i++) prefix[i] = prefix[i - 1] ^ a[i - 1];
        
        vector<int> result;
        for (int i = 0; i < Q; i++) {
            int L = query[i][0], R = query[i][1];
            int subarrayXor = prefix[R] ^ prefix[L - 1];
            result.push_back(totalXor ^ subarrayXor);
        }
        return result;
    }
}; 

int main(){
    int t;
    cin>>t;
    while(t--){
        int N, Q;
        cin>>N>>Q;
        int a[N];
        for(int i = 0;i < N;i++)
            cin>>a[i];
        int l, r;
        vector<int> query[Q];
        for(int i = 0;i < Q;i++){
            cin>>l>>r;
            query[i].push_back(l);
            query[i].push_back(r);
        }
        
        Solution ob;
        vector<int> ans = ob.specialXor(N, Q, a, query);
        for(int u: ans)
            cout<<u<<"\n";
    
        cout << "~" << "\n";
    }
    return 0;
}