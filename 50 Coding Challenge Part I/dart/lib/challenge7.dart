// Coding Challenge 7: Calculate the sum of odd numbers greater than 10
// and less or equal than 30
// @author: mofirojean

int calculateSumWithCondition() {
  int sum = 0;
  for (var i = 10; i <= 30; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
}
