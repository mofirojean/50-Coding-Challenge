/*  
  Coding Challenge 16: Create a function that will return a Boolean
  specifying if a number is prime

  @author: mofirojean
*/
import 'dart:math';

bool isPrime(int n) {
  if (n < 2) return false;
  if (n == 2) return true;

  var maxDiv = sqrt(n).floor();

  for (var i = 2; i <= maxDiv; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
