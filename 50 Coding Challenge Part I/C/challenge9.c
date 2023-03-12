// Coding challenge 9: Create a function that will convert from Fahrenheit to celsius

#include <stdio.h>

double fahrenhietToCelsius(int temp); // prototype function

int main(int argc, char *argv[]) {
        int temp;

        printf("Enter the temperature in celsius: ");
        scanf("%d", &temp);

        double tempCel = fahrenhietToCelsius(temp);
        printf("Temperature: %.2lf C\n", tempCel);

        return 0;
}

double fahrenhietToCelsius(int temp) {
        return (temp - 32) / 1.8;
}
