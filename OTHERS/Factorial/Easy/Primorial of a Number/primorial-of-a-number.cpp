#include<bits/stdc++.h>
using namespace std;

class Solution {
private:
    const int MOD = 1e9 + 7;
    vector<int> primes;

public:
    void precompute() {
        const int MAX_N = 100000;
        vector<bool> isPrime(MAX_N + 1, true);
        isPrime[0] = isPrime[1] = false;
        for (int i = 2; i * i <= MAX_N; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j <= MAX_N; j += i) isPrime[j] = false;
            }
        }
        for (int i = 2; i <= MAX_N; i++) {
            if (isPrime[i]) primes.push_back(i);
        }
    }
    
    long long primorial(long long n) {
        long long result = 1;
        for (int prime : primes) {
            if (prime > n) break;
            result = (result * prime) % MOD;
        }
        return result;
    }
};

int main()
{
    Solution ob;
    ob.precompute();
    int t; cin >> t;
    while(t--)
    {
        long long n;
        cin>>n;
        cout << ob.primorial(n) << endl;
    
        cout << "~" << "\n";
    }
    return 0;
} 