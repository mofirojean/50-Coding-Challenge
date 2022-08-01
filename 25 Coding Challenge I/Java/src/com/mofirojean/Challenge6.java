package com.mofirojean;

public class Challenge6 {
    // @author: mofirojean
    // @CodeChallenge 6: Calculate 10!

    public static void main(String[] args){
        // working with a for loop
        System.out.println("<-- for loop version -->");
        int factorial = 1;
        for (int i = 1; i <= 10; i++){
            factorial *= i;
        }
        System.out.println("The factorial of 10 : " + factorial);

        // working with a while loop
        System.out.println("<-- while loop version -->");
        int fact = 1;
        int i = 1;
        while (i <= 10){
            fact *= i;
            i++;
        }
        System.out.println("10! : " + fact);
    }
}
