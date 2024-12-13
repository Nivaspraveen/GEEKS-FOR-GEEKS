import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while (t-- > 0) {
            Solution ob = new Solution();
            System.out.println(ob.javaIntType(sc));
            System.out.println(ob.javaStringType(sc));
            System.out.println(ob.javaFloatType(sc));
        
            System.out.println("~");
        }
    }
}

class Solution {

    int javaIntType(Scanner sc) {
        return sc.nextInt();
    }
    
    String javaStringType(Scanner sc) {
        return sc.next();
    }
    
    float javaFloatType(Scanner sc) {
        return sc.nextFloat();
    }
};