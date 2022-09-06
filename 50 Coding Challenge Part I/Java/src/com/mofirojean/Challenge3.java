package com.mofirojean;

public class Challenge3 {

    public static void main(String[] args){
        System.out.println("<-- Using a for loop -->");
        for (int i = 1; i <= 12; i++){
         System.out.println(i + " * " + 7 + " = " + (i * 7));
        }

        System.out.println("<-- Using a while loop -->");
        int n = 1;
        while (n <= 12){
            System.out.println(n + " * " + 7 + " = " + (n * 7));
            n += 1;
        }
    }
}
