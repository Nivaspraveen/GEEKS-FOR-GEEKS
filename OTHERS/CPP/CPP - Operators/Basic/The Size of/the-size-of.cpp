//Initial Template for C++

#include <iostream>
using namespace std;

// Function prototype
void dataTypes(int, float, double, long long, string);

//User function Template for C++

// Function to find size of different data types
void dataTypes(int a, float b, double c, long long l, string d){
    float s1 = b / c;
    double s2 = b / a;
    float s3 = c / a;
    double s4 = s3 + l;
    
    cout << sizeof(s1) << " " << sizeof(s2) << " " << sizeof(s3) << " " << sizeof(s4) << endl;
    cout << sizeof(d) << " " << sizeof(d[3]) << endl;

}

// Driver Code
int main()
{
    int a;
    float b;
    double c;
    long long l;
    string d;
    
    int t;
    cin >> t;
    
    while(t--){
        
        cin >> a >> b >> c >> l >> d;
    
        dataTypes(a, b, c, l, d);
    
        cout << "~" << "\n";
    }
    
    return 0;
}