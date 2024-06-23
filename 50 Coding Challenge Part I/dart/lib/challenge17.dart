/*  
  Coding Challenge 17: Calculate the sum of digits of a positive integer number

  @author: mofirojean
*/

int sumDigits(int num) {
  int sum = 0;

  if (num.isNegative) return 0;

  List<String> str = num.toString().split('');
  for (var s in str) {
    sum += int.parse(s);
  }

  return sum;
}
