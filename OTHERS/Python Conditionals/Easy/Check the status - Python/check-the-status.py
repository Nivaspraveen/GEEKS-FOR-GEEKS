#Initial Template for Python 3

#User function Template for python3

# Function to check value and 
# return accordingly
def check_status(a, b, flag):
    if (a >= 0) ^ (b >= 0) and not flag:
        return True
    if a < 0 and b < 0 and flag:
        return True
    return False

def main():
    
    # Testcase input
    testcases = int(input())
    
    # Looping through testcases
    while(testcases > 0):
        a = int(input())
        b = int(input())
        flag = input()
        
        if(flag == "True"):
            flag = True
        else:
            flag = False
        
        if(check_status(a, b, flag) is True):
            print ("True")
        else:
            print ("False")
        
        testcases -= 1
        print("~")
 
if __name__ == '__main__':
    main()