

class AllTimesTable{

    public static void  Four(){
            Console.WriteLine("\n.......................................\nAll multiplication times tables\n");
            Console.Write("Enter a number to view its times table: ");
            int n = int.Parse(Console.ReadLine());

            switch (n){
                case 1: 
                    Console.WriteLine("\n\n1 Multiplication Times Table ");
                    for(int i = 1; i<=12; i++){
                    Console.WriteLine("1 * {0} = {1}", i, (1*i));
                    }
                    break;
                
                case 2:
                    Console.WriteLine("\n\n2 Multiplication Times Table ");
                    for(int i = 1; i<=12; i++){
                    Console.WriteLine("2 * {0} = {1}", i, (2*i));
                    }
                    break;

                case 3:
                    Console.WriteLine("\n\n3 Multiplication Times Table ");
                    for(int i = 1; i<=12; i++){
                    Console.WriteLine("3 * {0} = {1}", i, (3*i));
                    }
                    break;
                case 4:
                    Console.WriteLine("\n\n4 Multiplication Times Table ");
                    for(int i = 1; i<=12; i++){
                    Console.WriteLine("4 * {0} = {1}", i, (4*i));
                    }
                    break;
                case 5:
                    Console.WriteLine("\n\n5 Multiplication Times Table ");
                    for(int i = 1; i<=12; i++){
                    Console.WriteLine("5 * {0} = {1}", i, (5*i));
                    }
                    break;
                case 6:
                    Console.WriteLine("\n\n6 Multiplication Times Table ");
                    for(int i = 1; i<=12; i++){
                    Console.WriteLine("6 * {0} = {1}", i, (6*i));
                    }
                    break;
                case 7:
                    Console.WriteLine("\n\n7 Multiplication Times Table ");
                    for(int i = 1; i<=12; i++){
                    Console.WriteLine("7 * {0} = {1}", i, (7*i));
                    }
                    break;
                case 8:
                    Console.WriteLine("\n\n8 Multiplication Times Table ");
                    for(int i = 1; i<=12; i++){
                    Console.WriteLine("8 * {0} = {1}", i, (8*i));
                    }
                    break;
                case 9:
                    Console.WriteLine("\n\n9 Multiplication Times Table ");
                    for(int i = 1; i<=12; i++){
                    Console.WriteLine("9 * {0} = {1}", i, (9*i));
                    }
                    break;
                case 10:
                    Console.WriteLine("\n\n10 Multiplication Times Table ");
                    for(int i = 1; i<=12; i++){
                    Console.WriteLine("10 * {0} = {1}", i, (10*i));
                    }
                    break;

                default: 
                    Console.WriteLine("The number has to be between 1 and 10");
                    break;
                    
            }
        }
}
