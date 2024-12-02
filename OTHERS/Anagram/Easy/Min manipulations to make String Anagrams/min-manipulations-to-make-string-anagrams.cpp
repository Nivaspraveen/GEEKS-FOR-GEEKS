#include<bits/stdc++.h>
using namespace std;
int minManipulation (int n, string s1, string s2);
int main()
{
    int t; cin >> t;
    while (t--)
    {
        int n; cin >> n;
        string s1; cin >> s1;
        string s2; cin >> s2;

        cout << minManipulation (n, s1, s2) << endl;
    
cout << "~" << "\n";
}
}

// User function template for C++

int minManipulation (int N, string S1, string S2) {
    vector<int> count(26, 0);
    for (int i = 0; i < N; i++) count[S1[i] - 'a']++;
    for (int i = 0; i < N; i++) count[S2[i] - 'a']--;
    int result = 0;
    for (int i = 0; i < 26; i++) result += abs(count[i]);
    return result / 2;
}