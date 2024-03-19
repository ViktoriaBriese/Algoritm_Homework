function isPrime(number) {
    if (number == 0 || number == 1)
      return true;
  
    // Начинается цикл с делителя 2 и продолжается до number - 1
    for (let divider = 2; divider < number; divider++) {
      if (number % divider == 0)
        return false;
    }
    return true;
  }

console.log(isPrime(17)); // true
console.log(isPrime(25)); // false
console.log(isPrime(29)); // true