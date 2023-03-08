// Coding challenge 7: Calculate the sum of odd numbers greater than
// 10 and less than or equal to 30

#include <stdio.h>

int main(int argc, char *argv[]) {
	int sum = 0;

	for(int i = 11; i <= 30; i += 2) {
		sum += i;
	}

	printf("Sum = %d\n", sum);

	return 0;
}
