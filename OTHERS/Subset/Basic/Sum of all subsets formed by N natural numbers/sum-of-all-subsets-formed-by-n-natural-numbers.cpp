#include<bits/stdc++.h> 
using namespace std; 

//User function Template for C++

class Solution {
public:
    long long sumOfSubsets(int N) {
        long long sum = (long long)N * (N + 1) / 2;
        return sum * (1LL << (N - 1));
    }
};

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int N;
        cin>>N;
        Solution ob;
        long long ans  = ob.sumOfSubsets(N);
        cout<<ans<<endl;
    
        cout << "~" << "\n";
    }
    return 0;
}