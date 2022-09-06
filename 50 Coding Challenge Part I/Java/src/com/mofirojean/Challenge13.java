package com.mofirojean;

public class Challenge13 {
    
    public static void main(String args[]) {
        int[] array = {21, 3, 10, 4, 11, -5}; //a random array used for the exercise
        int max = array[0];
        for (int i = 1; i< array.length; i++){
            if(array[i]>max){
                max = array[i];
            }
        }
    System.out.println("The maximum number is: "+ max);
    }
}
