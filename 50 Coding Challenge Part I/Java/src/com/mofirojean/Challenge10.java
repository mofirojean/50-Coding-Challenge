package com.mofirojean;

public class Challenge10 {

    public static void main(String[] args){
        // implements the array addition method
        int[] arrayN = {2, 3, -1, 5, 7, 9, 10, 15, 95};
        int total = arraySum(arrayN);
        System.out.println(total);

    }

    // method to sum the elements of an array
    public static int arraySum(int[] arrayNumber){
        int total = 0;
        for (int i: arrayNumber)
            total += i;
        return total;
    }
}
