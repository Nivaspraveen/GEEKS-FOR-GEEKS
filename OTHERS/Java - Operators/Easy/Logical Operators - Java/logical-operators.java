//Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

//User function Template for Java

class Geeks{
    
    static void logicOp(boolean a, boolean b){
        boolean and = a && b, or = a || b, not = !a && !b;
        System.out.print(and + " " + or + " " + not);
    }
}

class GFG {
	public static void main (String[] args) {
		
		//taking input using Scanner class
		Scanner sc = new Scanner(System.in);
		
		//taking total testcases
		int testcases = sc.nextInt();
		
		while(testcases-- > 0){
		    
		    //taking the two boolean values
		    boolean a = sc.nextBoolean();
		    boolean b = sc.nextBoolean();
		    
		    //creating an object of class Geeks
		    Geeks g = new Geeks();
		    
		    //calling the method logicOp() 
		    //and passing a,b as arguments
		    g.logicOp(a, b);
		    System.out.println();
		
            System.out.println("~");
        }
	}
}