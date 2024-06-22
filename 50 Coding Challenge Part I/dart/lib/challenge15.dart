/*  
  Coding Challenge 15: Create a function that will find the nth Fibonacci number using recursion.
  Reminder:
  F(0) = 0
  F(1) = 1
  F(n) = F(n-1) + F(n-2)

  @author: mofirojean
*/

int findFibonacci(int n) {
  if (n == 0) {
    return n;
  }

  if (n == 1) {
    return n;
  }

  return findFibonacci(n - 1) + findFibonacci(n - 2);
}
