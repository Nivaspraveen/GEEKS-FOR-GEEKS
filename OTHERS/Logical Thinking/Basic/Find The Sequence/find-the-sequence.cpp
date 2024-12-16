#include<bits/stdc++.h> 
using namespace std; 

class Solution {
public:
    vector<long long> printSeries(int N) {
        if (N == 1) return {1};
        else if (N == 2) return {1, 2};
        else if (N == 3) return {1, 2, 5};
        
        vector<long long> series = {1, 2, 5};
        for (long long i = 3; i <= N; i++) {
            long long next_term = series[i - 1] + series[i - 2] + series[i - 3];
            series.push_back(next_term);
        }
        return series;
    }
};

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int N;
        cin >> N;
        
        Solution ob;
        vector<long long> a = ob.printSeries(N);
        
        for(long long i=0;i<N;i++){
            cout<<a[i]<<" ";
        }
        cout<<endl;
        
    
        cout << "~" << "\n";
    }
    return 0;
}