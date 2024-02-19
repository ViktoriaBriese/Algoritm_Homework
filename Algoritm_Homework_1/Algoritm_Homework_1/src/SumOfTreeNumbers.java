import java.util.Scanner;

public class SumOfTreeNumbers {
    public static void main(String[] args) {
        // Создание объекта Scanner для ввода данных с клавиатуры
        Scanner scanner = new Scanner(System.in);

        // Получение трех чисел от пользователя
        System.out.print("Введите первое число: ");
        int num1 = scanner.nextInt();

        System.out.print("Введите второе число: ");
        int num2 = scanner.nextInt();

        System.out.print("Введите третье число: ");
        int num3 = scanner.nextInt();

        // Сложение трех чисел
        int sum = num1 + num2 + num3;

        // Вывод суммы
        System.out.println("Сумма трех чисел равна: " + sum);
    }
}

    /* START
        READ number input: num1,num2,num3
        declare sum
        sum = num1+num2+num3
        print sum
        END*/
