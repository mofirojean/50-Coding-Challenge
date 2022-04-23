package com.mofirojean;

public class Challenge1 {
    // @author: mofirojean
    // @CodeChallenge 1: Print numbers from 1 to 10

    public static void main(String[] args) {
        System.out.println("<-- Using a while loop -->");
        // using a while loop
        int n = 1;
        while (n <= 10){
            System.out.println(n);
            n += 1;
        }
        System.out.println("<-- Using a for loop -->");
        // working with for loop
        for (int i = 1; i <= 10; i++){
            System.out.println(i);
        }

    }
}
