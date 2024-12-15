//Initial Template for C++
#include<bits/stdc++.h>
using namespace std;

//User function Template for C++

// CollegeCourse Class 
class CollegeCourse {
private:
    string courseID;
    char grade;
    int credits;
    int gradePoints;
    float honorPoints;
public:     
    void set_CourseId(string CID) {
        courseID = CID;
    }
    
    void set_Grade(char g) {
        grade = toupper(g);
    }
    
    void set_Credit(int cr) {
        credits = cr;
    }
    
    int calculateGradePoints(char g) {
        g = toupper(g);
        switch (g) {
            case 'A': return 10;
            case 'B': return 9;
            case 'C': return 8;
            case 'D': return 7;
            case 'E': return 6;
            case 'F': return 5;
            default: return 0;
        }
    }
    
    float calculateHonorPoints(int gp, int cr) {
        return gp * cr;
    }
    
    void display() {
        gradePoints = calculateGradePoints(grade);
        honorPoints = calculateHonorPoints(gradePoints, credits);
        cout << gradePoints << " " << honorPoints << endl;
    }
    
};

int main() {
    int t;
    cin>>t;
    while(t--) {
        CollegeCourse cc;
        string courseId;
        int gp;
        char grade;
        int credits;
        cin>>courseId>>grade>>credits;
        cc.set_CourseId(courseId);
        cc.set_Grade(grade);
        cc.set_Credit(credits);
        gp=cc.calculateGradePoints(grade);
        cc.calculateHonorPoints(gp,credits);
        cc.display();
        
        cout << "~" << "\n";
    }
    return 0;
}