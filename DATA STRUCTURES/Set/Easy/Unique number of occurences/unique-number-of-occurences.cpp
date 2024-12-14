//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

//User function Template for C++
class Solution {
    public:
    bool isFrequencyUnique(int n, int arr[]) {
        unordered_map<int, int> freqMap;
        unordered_set<int> freqSet;
        
        for (int i = 0; i < n; i++) freqMap[arr[i]]++;
        
        for (auto& pair : freqMap) {
            int freq = pair.second;
            if (freqSet.find(freq) != freqSet.end()) return false;
            freqSet.insert(freq);
        }
        return true;
    }
};

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        int arr[n];
        for(int i=0;i<n;i++)
            cin>>arr[i];
        Solution ob;
        bool ans=ob.isFrequencyUnique(n,arr);
        if(ans)
            cout<<1<<endl;
        else
            cout<<0<<endl;
    
        cout << "~" << "\n";
    }
}