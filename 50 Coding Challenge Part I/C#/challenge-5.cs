//Summation of all integers from 1 to 10

class SumToTen{

    public static void Sum(){
        Console.WriteLine("\n.......................................\nFive: Sum of numbers from 1 to 10\n");
        int sum = 0;
        for (int i = 1; i<11; i++){
            sum = sum + i;
        }

        Console.WriteLine("The sum of the first 10 numbers is {0}", sum);
    }
}