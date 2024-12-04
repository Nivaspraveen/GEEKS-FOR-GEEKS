# User function template for Python

def friends_in_trouble(j_angry, s_angry):
    if (j_angry and s_angry) or (not j_angry and not s_angry): return True
    else: return False

#Initial Template for Python 
#Position this line where user code will be pasted.

def main():
    testcase = int(input())

    # loop for testcases

    while (testcase > 0):
        string = input().split()
        j_angry = string[0]
        s_angry = string[1]
        if (j_angry == 'True'):
            j_angry = True
        else:
            j_angry = False

        if (s_angry == 'True'):
            s_angry = True
        else:
            s_angry = False

        print(friends_in_trouble(j_angry, s_angry))
        print("~")
        testcase -= 1


if __name__ == '__main__':
    main()