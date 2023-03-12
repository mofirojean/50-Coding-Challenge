// Coding challenge 10: Calculate the sum of numbers in an array of numbers

#include <stdio.h>

int sumArray(int num[], int len);

int main(int argc, char *argv[]) {

	int samArr[] = {2, 3, -1, 5, 7, 9, 10, 15 , 95};
	int arr_len = sizeof(samArr)/sizeof(samArr[0]);

	int arrSum = sumArray(samArr, arr_len);
	printf("Sum = %d\n", arrSum);

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
