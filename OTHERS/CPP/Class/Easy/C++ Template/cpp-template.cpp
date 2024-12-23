//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

//User function Template for C++

template <class T>
class minElement {
private:
    T y;
    
public: 
    minElement(T value) {
        y = value;
    }
    
    void check(T x) {
        cout << (x < y ? x : y) << endl;
    }
};

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int c;
        cin>>c;
        if(c==1)
        {
            string a,b;
            cin>>a>>b;
            minElement<string>obj1(a);
            obj1.check(b);
        }
        else if(c==2)
        {
            int a,b;
            cin>>a>>b;
            minElement<int>obj2(a);
            obj2.check(b);
        }
        else
        {
            char a,b;
            cin>>a>>b;
            minElement<char>obj3(a);
            obj3.check(b);
        }
    
        cout << "~" << "\n";
    }
}