// Coding challenge 11: Calculate the average of numbers in an array of numbers

#include <stdio.h>

double averageArray(int num[], int len);
int sumArray(int num[], int len);

int main(int argc, char *argv[]) { 

        int samArr[] = {1, 3, 9, 15, 90};
        int arr_len = sizeof(samArr)/sizeof(samArr[0]);

        double arrAvg = averageArray(samArr, arr_len);
        printf("Average = %.2lf\n", arrAvg);

        return 0;
}

// function calculates the sum of any array of nmbers
int sumArray(int num[], int len) {
        int sum = 0;

        for(int i = 0; i < len; ++i) {
                sum += num[i];
        }
        return sum;
}

// function calculates the average of an array of numbers
double averageArray(int num[], int len) {
	int sum = sumArray(num, len);
	return (sum/len);
}

