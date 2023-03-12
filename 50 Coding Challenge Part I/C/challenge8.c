// Coding challenge 8: Create a function that will convert from celsius to Fahrenheit

#include <stdio.h>

double celsiusToFahrenhiet(int temp); // prototype function

int main(int argc, char *argv[]) {
	int temp;

	printf("Enter the temperature in celsius: ");
	scanf("%d", &temp);

	double tempFah = celsiusToFahrenhiet(temp);
	printf("Temperature: %.2lf F\n", tempFah);

	return 0;
}

double celsiusToFahrenhiet(int temp) {
	return (temp * 1.8) + 32;
}

