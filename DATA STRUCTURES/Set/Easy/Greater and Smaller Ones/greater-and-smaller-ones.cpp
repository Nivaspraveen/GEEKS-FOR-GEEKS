//Initial Template for C++
#include<bits/stdc++.h>
using namespace std;

//User function Template for C++
class Geeks {
public:
    static void greaterKSorted(vector<int>&arr, int k) {
        set<int> uniqueElements(arr.begin(), arr.end());
        bool found = false;
        
        for (int x : uniqueElements) {
            if (x >= k) {
                cout << x << " ";
                found = true;
            }
        }
         
        if (!found) cout << -1;
        // cout << endl;
    }
  
    static void smallerKSorted(vector<int>&arr, int k) {
         set<int> uniqueElements(arr.begin(), arr.end());
         bool found = false;
         
         for (int x : uniqueElements) {
             if (x < k) {
                 cout << x << " ";
                 found = true;
             }
         }
         
         if (!found) cout << -1;
        //  cout << endl;
    }
};

int main() {
    
    int t; 
    cin >> t;
    while(t--) {
        int n, k;
        cin >> n;
        cin >> k;
        
        vector<int>arr;
        for(int i = 0; i < n; i++) {
            int x;
            cin >> x;
            arr.push_back(x);
        }
        Geeks obj;
        obj.greaterKSorted(arr, k);
        cout<<endl;
        obj.smallerKSorted(arr, k);
        cout<<endl;
    
        cout << "~" << "\n";
    }
    return 0;
}