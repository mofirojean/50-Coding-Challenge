// Coding challenge 6: Calculate 10!

#include <stdio.h>

int main(int argc, char *argv[]) {
	int prod = 1;
	for (int i = 1; i<=10; ++i) {
		prod *= i;
	}

	printf("10! = %d\n", prod);

	return 0;
}
