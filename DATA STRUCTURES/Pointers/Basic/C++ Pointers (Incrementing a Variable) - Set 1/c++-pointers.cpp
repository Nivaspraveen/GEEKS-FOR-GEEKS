//Initial Template for C

#include<stdio.h>
void updateVar(int *a);

int main()
{
    int t;
    scanf("%d", &t);
    while(t--)
    {   int a;
        scanf("%d", &a);
        updateVar(&a);
        printf("%d\n", a);
    
printf("~%s", "\n");}
    return 0;
}

//User function Template for C

/* This function is invoked by passing the address of the variable.
    You need to increment the value stored in the variable by 10 */

/* complete the function below */

void updateVar(int *a) {
      *a += 10;
}