package com.mofirojean;

public class Challenge7 {

    public static void main(String[] args){
        // working with for loops
        System.out.println("<-- for loop version -->");
        int total = 0;
        for (int i = 11; i<30; i++){
            if (i % 2 == 0){
                total += i;
            }
        }
        System.out.println("Sum of the Even number: " + total);

        // working with wile loop
        System.out.println("<-- while loop version -->");
        int sumEven = 0;
        int n = 11;
        while (n<30){
            if (n % 2 == 0)
                sumEven += n;
            n++;
        }
        System.out.println("The Sum is: " + sumEven);
    }
}
