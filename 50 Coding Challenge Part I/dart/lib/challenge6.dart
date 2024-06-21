// Coding Challenge 6: Calculate 10! Reminder n! = 1 * 2 * … * n
// @author: mofirojean

int calculateFactorial() {
  int fact = 1;
  for (var i = 1; i <= 10; i++) {
    fact *= i;
  }
  return fact;
}
