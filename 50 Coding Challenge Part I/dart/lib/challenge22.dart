/*  
  Coding Challenge 22: Reverse an array

  @author: mofirojean
*/

List<int> reverseArray(List<int> nums) {
  List<int> reverse = [];
  for (var i = nums.length - 1; i >= 0; i--) {
    reverse.add(nums[i]);
  }
  return reverse;
}
