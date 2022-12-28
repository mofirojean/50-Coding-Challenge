//Method that calculates 10!

class TenFactorial{

    public static void Fact(){

        int fact = 1;
        for(int i = 0; i<10; i++){
            fact = fact*i;
        }

        Console.WriteLine("10! = " + fact);
    }

}