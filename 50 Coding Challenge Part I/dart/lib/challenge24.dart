/*  
  Coding Challenge 24: Create a function that will merge two arrays and return 
  the result as a new array

  @author: mofirojean
*/

List<int> mergeArrays(List<int> arr1, List<int> arr2) {
  for (var el in arr2) {
    arr1.add(el);
  }
  return arr1;
}
