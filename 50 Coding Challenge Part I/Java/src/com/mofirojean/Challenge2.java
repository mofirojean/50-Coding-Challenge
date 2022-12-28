package com.mofirojean;

public class Challenge2 {

    public static void main(String[] args){
        System.out.println("<-- Using a for loop -->");
        for (int i = 1; i <= 100; i++){
            if (i % 2 == 1){
                System.out.println(i);
            }
        }
        System.out.println("<-- Using a while loop -->");
        int n = 1;
        while (n <= 100){
            if (n % 2 == 1){
                System.out.println(n);
            }
            n += 1;
        }

    }
}
