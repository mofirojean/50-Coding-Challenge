/*  
  Coding Challenge 12a: Create a function that receives an array of numbers and returns an
  array containing only the positive numbers.
  Requirement: Use a “for” loop

  @author: mofirojean
*/

List<int> getPositivesA(List<int> arr) {
  List<int> positiveArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      positiveArr.add(arr[i]);
    }
  }
  return positiveArr;
}


/*  
  Coding Challenge 12b: Create a function that receives an array of numbers and returns an
  array containing only the positive numbers.
  Requirement: Use a “for … in” loop

  @author: mofirojean
*/

List<int> getPositivesB(List<int> arr) {
  List<int> positiveArr = [];
  for (var num in arr) {
    if (num % 2 == 0) {
      positiveArr.add(num);
    }
  }
  return positiveArr;
}

/*  
  Coding Challenge 12c: Create a function that receives an array of numbers and returns an
  array containing only the positive numbers.
  Requirement: Use .where() array method

  @author: mofirojean
*/

Iterable<int> getPositivesC(List<int> arr) {
  return arr.where((int num) => num % 2 == 0);
}

Iterable<int> getPositivesD(List<int> arr) {
  return arr.where((int num) => num.isEven);
}