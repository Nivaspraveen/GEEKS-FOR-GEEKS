//Initial Template for C++
#include<bits/stdc++.h>
using namespace std;

//User function Template for C++

class Solution{
public:
      string maxSum(string w,char x[], int b[],int n){
          unordered_map<char, int> valueMap;
          for (int i = 0; i < n; ++i) valueMap[x[i]] = b[i];
          int currSum = 0, maxSum = INT_MIN, start = 0, end = 0, tempStart = 0;
          
          for (int i = 0; i < w.size(); ++i) {
              char c = w[i];
              int value = (valueMap.find(c) != valueMap.end()) ?valueMap[c] : int(c);
              currSum += value;
              if (currSum > maxSum) {
                  maxSum = currSum;
                  start = tempStart;
                  end = i;
              }
              if (currSum < 0) {
                  currSum = 0;
                  tempStart = i + 1;
              }
          }
          return w.substr(start, end - start + 1);
      }
};

int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        string w;
        cin>>w;
        int n;
        cin>>n;
        char x[n];
        int b[n];
        for(int i = 0;i<n;i++)
            cin>>x[i];
        for(int i = 0;i<n;i++)
            cin>>b[i];
        Solution ob;
        cout << ob.maxSum(w,x,b,n) << endl;
    
        cout << "~" << "\n";
    }
    return 0; 
}

