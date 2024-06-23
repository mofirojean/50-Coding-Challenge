/*  
  Coding Challenge 18: Print the first 100 prime numbers

  @author: mofirojean
*/

// Functions prints the first nth prime numver
import 'package:dart/challenge16.dart';

void printPrimes(int nPrimes) {
  int n = 1;
  int i = 2;

  while (n < nPrimes) {
    if (isPrime(i)) {
      print('$n ---> $i');
      n++;
    }
    i++;
  }
}
