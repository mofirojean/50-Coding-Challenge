/*  
  Coding Challenge 19: Create a function that will return in an array the first
  "nPrimes" prime numbers greater than a number "startAt"

  @author: mofirojean
*/
import 'package:dart/challenge16.dart';

List<int> getPrimes(int nPrimes, int startAt) {
  List<int> arr = [];

  while (arr.length < nPrimes) {
    if (isPrime(startAt)) {
      arr.add(startAt);
    }
    startAt++;
  }

  return arr;
}
