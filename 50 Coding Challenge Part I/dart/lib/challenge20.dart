/*  
  Coding Challenge 20: Rotate an array to the left 1 position

  @author: mofirojean
*/

List<int> rotateLeft(List<int> arr) {
  var first = arr.removeAt(0);
  arr.add(first);
  return arr;
}
