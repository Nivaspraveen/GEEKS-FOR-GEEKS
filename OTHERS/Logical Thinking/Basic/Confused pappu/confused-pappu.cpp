#include<bits/stdc++.h>
using namespace std;
long long findDiff(long long n);

int main(){
    long t;
    cin>>t;
    while(t--){
        long long amount;
        cin>>amount;
        cout<<findDiff(amount)<<endl;
    
        cout << "~" << "\n";
    }
    return 0;
}

long long findDiff(long long amount){
    string original = to_string(amount), modified = original;
    for (char& c : modified) {
        if (c == '6') c = '9';
    }
    long long modified_amt = stoi(modified);
    return modified_amt - amount;
}