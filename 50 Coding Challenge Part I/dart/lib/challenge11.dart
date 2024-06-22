/*  
  Coding Challenge 11: Calculate the average of the numbers in an array of numbers
  Example array: [1, 3, 9, 15, 90]
  Expected output: 23.6

  @author: mofirojean
*/

import 'package:dart/challenge10.dart';

double averageArray(List<int> arr) {
  return sumArray(arr) / arr.length;
}
