// Coding challenge 5: Calculate the sum of numbers from 1 to 10

#include <stdio.h>

int main(int argc, char *argv[]) {
	int sum = 0;
	for (int i = 1; i <= 10; ++i) {
		sum += i;
	}

	printf("Sum = %d\n", sum);

	return 0;
}
