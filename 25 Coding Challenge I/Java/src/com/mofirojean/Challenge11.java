package com.mofirojean;

public class Challenge11 {
    // @author: mofirojean
    // @CodeChallenge 11: Calculate the average of the numbers in an array of numbers

    public static void main(String[] args){
        // implementing the arrayAverage method
        int[] ar = {1, 3, 9, 15, 90};
        System.out.println("The average of our array is: " + arrayAverage(ar));
    }

    // method calculates the average of any array
    public static double arrayAverage(int[] ar){
       int n = ar.length;
       double total = 0;
        for (int i: ar)
            total += i;
        return (total/n);
    }
}
