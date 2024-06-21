/*  
  Coding Challenge 10: Calculate the sum of numbers in an array of numbers.
  Example array: [2, 3, -1, 5, 7, 9, 10, 15, 95]
  Expected output: 145

  @author: mofirojean
*/

int sumArray(List<int> arr) {
  int sum = 0;
  for (var num in arr) {
    sum += num;
  }
  return sum;
}
