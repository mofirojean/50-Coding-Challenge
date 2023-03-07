// Coding challenge 4: Print the multiplications tables with numbers from 1 to 10

#include <stdio.h>

int main(int argc, char *argv[]) {

	for (int i = 1; i <= 10; ++i) {

		printf("Multiplication table of %d\n", i);
		for (int j = 1; j <= 10; ++j) {
			printf("%d * %d = %d\n", j, i, i*j);
		}
	}

	return 0;
}
