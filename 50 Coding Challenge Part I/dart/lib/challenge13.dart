/*  
  Coding Challenge 13: Find the maximum number in an array of numbers

  @author: mofirojean
*/

int arrayMaxA(List<int> arr) {
  int max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

int arrayMaxB(List<int> arr) {
  int max = 0;
  for (var num in arr) {
    if (num > max) max = num;
  }
  return max;
}

