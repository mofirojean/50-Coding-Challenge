package com.mofirojean;

public class Challenge14 {

    public static void main(String[] args){
        fibonacci();
    }

    public static void fibonacci() {
        int firstNumber = 0; // define the initial values of any fibonacci series
        int secondNumber = 1;
        int count = 1;
        System.out.println(firstNumber);
        System.out.println(secondNumber);
        while (count < 8) {
            int number = firstNumber + secondNumber; //the new number in the series is the sum of the previous two numbers
            firstNumber = secondNumber; // the new values of first and second numbers are set
            secondNumber = number;
            System.out.println(number);
            count++;
        }
    }
}
