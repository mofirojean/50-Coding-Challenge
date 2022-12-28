package com.mofirojean;

public class Challenge15 {

    public static void main(String[] args){
        // Driver Method
        int number = nthFabonacciNUmber(10);
        System.out.println(number);
    }

    // function to compute the nth fibonacci number using recursion
    public static int nthFabonacciNUmber(int n){
        if (n <= 1){
            return n;
        }
        else{
            return nthFabonacciNUmber(n - 1) + nthFabonacciNUmber(n - 1);
        }
    }
}
