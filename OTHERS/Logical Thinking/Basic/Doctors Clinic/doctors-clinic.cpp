// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// User function Template for C++

class Solution{
public:
    int waitingTime(int N, int X){
        int total_time_for_prev_patients = (N - 1) * 10;
        int arrival_time_of_last_patients = (N - 1) * X;
        if (total_time_for_prev_patients <= arrival_time_of_last_patients) return 0;
        return total_time_for_prev_patients - arrival_time_of_last_patients;
    }
};


int main(){
    int t;
    cin >> t;
    while(t--){
        int N, X;
        cin>>N>>X;
        
        Solution ob;
        cout<<ob.waitingTime(N, X)<<"\n";
    
        cout << "~" << "\n";
    }
    return 0;
}