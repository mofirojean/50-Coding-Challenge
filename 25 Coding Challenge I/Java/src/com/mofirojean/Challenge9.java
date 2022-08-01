package com.mofirojean;

public class Challenge9 {
    // @author: mofirojean
    // @CodeChallenge 9: Create a function that will convert from Fahrenheit to Celsius

    public static void main(String[] args){
        // Executing the temptConversion method
        int n = 50;
        System.out.println(n + " F" + " is equivalent to " + temptConversion(n) + " C");
    }

    // method to convert from Fahrenheit to Celsius
    public static double temptConversion(int n){
        return (n - 32)/1.8;
    }
}
