// See https://aka.ms/new-console-template for more information
int month = DateTime.Now.Month;

//Expression
//switch case ile bulunan ayı göster
switch (month)
{
    case 1:
        Console.WriteLine("Ocak ayındayız");
        break;
    case 2:
        Console.WriteLine("Şubat ayındayız");
        break;
    case 3:
        Console.WriteLine("Mart ayındayız");
        break;
    case 4:
        Console.WriteLine("Nisan ayındayız");
        break;
    case 5:
        Console.WriteLine("Mayıs ayındayız");
        break;
    case 6:
        Console.WriteLine("Haziran ayındayız");
        break;
    case 7:
        Console.WriteLine("Temmuz ayındayız");
        break;
    case 8:
        Console.WriteLine("Ağustos ayındayız");
        break;
    case 9:
        Console.WriteLine("Eylül ayındayız");
        break;
    case 10:
        Console.WriteLine("Ekim ayındayız");
        break;
    case 11:
        Console.WriteLine("Kasım ayındayız");
        break;
    case 12:
        Console.WriteLine("Aralık ayındayız");
        break;
    default:
        Console.WriteLine("Lütfen 1 ile 12 arasında bir sayı giriniz");
        break;
}
