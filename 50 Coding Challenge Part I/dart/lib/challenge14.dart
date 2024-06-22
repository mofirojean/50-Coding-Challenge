/*  
  Coding Challenge 14: Print the first 10 Fibonacci numbers without using recursion.
  Reminder:
  F(0) = 0
  F(1) = 1
  F(n) = F(n-1) + F(n-2)

  @author: mofirojean
*/

void printFabonnaciSequence() {
  var f0 = 0;
  print(f0);
  var f1 = 1;
  print(f1);

  for (var i = 2; i <= 10; i++) {
    var fn = f0 + f1;
    print(fn);
    f0 = f1;
    f1 = fn;
  }
}
