using System;

class Run{
    public static void Main(){
        Code.One();
        Code.Two();
        Code.Three();
    }
}

class Code{
    public static void One(){
        Console.WriteLine("\nOne: Print Numbers");
        for(int i = 1; i<11; i++){
            Console.Write("{0} ", i);
        }
    }

    public static void Two(){
        Console.WriteLine("\n\nTwo: Odd Numbers");
        for(int i = 1; i<=100; i= i+2){
            Console.Write("{0} ", i);
        }
    }

    public static void Three(){
        Console.WriteLine("\n\n7 Multiplication Times Table ");
        for(int i = 1; i<=12; i++){
            Console.WriteLine("7 * {0} = {1}", i, (7*i));
        }
    }

}
