package com.mofirojean;

public class Challenge4 {

    public static void main(String[] args){
        // working with a for loop
        System.out.println("<-- Using a for loop -->");
        for (int i = 1; i <= 10; i++){
            System.out.println("<-- " + i + " Times Table -->");
            for (int n = 1; n <= 10; n++){
                System.out.println(n + " * " + i + " = " + (n * i));
            }
        }

        // working with a while loop
        System.out.println("<-- Using a while loop -->");
        int n = 1;
        while (n <= 10){
            System.out.println("<-- " + n + " Times Table -->");
            for (int i = 1; i <= 10; i++){
                System.out.println(i + " * " + n + " = " + (n * i));
            }
            n += 1;
        }
    }
}
