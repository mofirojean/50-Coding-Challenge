// Coding Challenge 4: Print the multiplication tables with numbers from 1 to 10
// @author: mofirojean

void printMultiplicationTable() {
  for (var i = 1; i <= 10; i++) {
    print('\n$i multiplication table');
    printTable(i);
  }
}

void printTable(int num) {
  for (var i = 1; i <= 10; i++) {
    print('$i * $num = ${i * num}');
  }
}
