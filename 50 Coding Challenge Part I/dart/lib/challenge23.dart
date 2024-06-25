/*  
  Coding Challenge 23: Reverse an array

  @author: mofirojean
*/

String reverseString(String strs) {
  List<String> reverse = [];
  List<String> letters = strs.trim().split('');

  for (var i = letters.length - 1; i >= 0; i--) {
    reverse.add(letters[i]);
  }

  return reverse.join('');
}
