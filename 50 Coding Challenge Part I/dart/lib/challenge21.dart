/*  
  Coding Challenge 21: Rotate an array to the right 1 position

  @author: mofirojean
*/

List<int> rotateRight(List<int> arr) {
  var last = arr.removeLast();
  arr.insert(0, last);
  return arr;
}
