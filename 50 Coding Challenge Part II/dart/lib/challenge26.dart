/*  
  Coding Challenge 26: Create a function that will receive two arrays and will 
  return an array with elements that are in the first array but not in the second

  @author: mofirojean
*/

List<int> mergeLeft(List<int> arr1, List<int> arr2) {
  List<int> arr = [];
  for (var el in arr1) {
    if (!arr2.contains(el)) {
      arr.add(el);
    }
  }
  return arr;
}
