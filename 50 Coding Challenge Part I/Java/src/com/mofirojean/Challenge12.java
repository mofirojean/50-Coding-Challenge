package com.mofirojean;

import java.util.Arrays;

public class Challenge12 {

    public static void main(String[] args){
        // implement our methods
        int[] ar = {-5, 10, -3, 12, -9, 90, 0, 1};
        System.out.println(Arrays.toString(arrayPositive(ar)));
    }

    // method to select the positive numbers
    public static int[] arrayPositive(int[] ar){
        int[] newArray = new int[10];
        for (int i = 0; i< ar.length; i++){
            int  element = ar[i];
            if (element > 0)
                newArray[i] = element;
        }
        return newArray;
    }
}
