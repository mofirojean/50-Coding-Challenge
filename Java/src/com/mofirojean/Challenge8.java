package com.mofirojean;

public class Challenge8 {
    // @author: mofirojean
    // @CodeChallenge 8: Create a function that will convert from Celsius to Fahrenheit

    public static void main(String[] args){
        // Executing the temptConversion method
        int n = 10;
        System.out.println(n + " C" + " is equivalent to " + temptConversion(n) + " F");
    }

    // function to perform the conversion from Celsius to Fahrenheit
    public  static  double temptConversion(int n){
       return  (n * 1.8) + 32;
    }
}

