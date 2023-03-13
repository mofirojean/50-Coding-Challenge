// Coding challenge 12: Create a function that recieves an array of numbers and 
// returns an array containing only positive numbers

#include <stdio.h>

int * getPositive(int arr[], int len);

int main(int argc, char *argv[]) {

	int arr[] = {-5, 10, -3, 12, -9, 5, 90, 0, 1};
	int len = sizeof(arr)/sizeof(arr[0]);
	int * arrPointer = getPositive(arr, len);

	for(int i = 0; i < len; ++i) {
		printf("*(p + %d): %d\n", i, arrPointer[i]);
	}

	return 0;
}

int * getPositive(int arr[], int len) {
	static int positive[10];
	int index = 0;

	for(int i = 0; i < len; ++i) {
		if(arr[i] >= 0) {
			positive[index] = arr[i];
			++index;
		}
	}

	return positive;
}
