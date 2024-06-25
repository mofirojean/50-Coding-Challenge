/*  
  Coding Challenge 25: Create a function that will receive two arrays of numbers 
  as arguments and return an array composed of all the numbers that are either
  in the first array or second array but not in both

  @author: mofirojean
*/

List<int> mergeExlusive(List<int> arr1, List<int> arr2) {
  for (var el in arr2) {
    if (!arr1.contains(el)) {
      arr1.add(el);
    }
  }
  return arr1;
}
