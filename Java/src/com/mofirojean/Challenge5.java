package com.mofirojean;

public class Challenge5 {
    // @author: mofirojean
    // @CodeChallenge 5: Calculate the sum of numbers from 1 to 10

    public static void main(String[] args){
        // working with a for loop
        System.out.println("<-- Using a for loop -->");
        int sum = 0;
        for (int i = 0; i <= 10; i++){
            sum += i;
        }
        System.out.println("The sum: "+ sum);

        // working with a while loop
        System.out.println("<-- Using a while loop -->");
        int total = 0;
        int n = 1;
        while (n <= 10){
            total += n;
            n += 1;
        }
        System.out.println("The total: "+ total);
    }
}
