class DynamicArray {
    constructor() {
      this.array = new Array(1);
      this.count = 0;
      this.size = 1;
    }
  
    // Метод добавления элемента в конец массива
    add(data) {
      // Проверяем, достаточно ли места в массиве
      if (this.count === this.size) {
        this.growSize(); // Увеличиваем размер массива
      }
      this.array[this.count] = data; // Вставляем элемент в конец массива
      this.count++; // Увеличиваем счетчик элементов
    }
  
    // Метод увеличения размера массива
    growSize() {
      let temp = new Array(this.size * 2); // Создаем новый массив удвоенного размера
      for (let i = 0; i < this.size; i++) {
        temp[i] = this.array[i]; // Копируем элементы из старого массива в новый
      }
      this.array = temp; // Заменяем старый массив на новый
      this.size *= 2; // Обновляем размер массива
    }
  
    // Метод добавления массива данных в конец динамического массива
    addArray(arrAdd) {
      for (let i = 0; i < arrAdd.length; i++) {
        this.add(arrAdd[i]); // Добавляем каждый элемент массива arrAdd в конец динамического массива
      }
    }
  
    // Метод удаления элемента по его значению
    removeValue(value) {
      let found = false; // Флаг для отслеживания того, был ли элемент найден и удален
      for (let i = 0; i < this.count; i++) {
        if (this.array[i] === value) {
          // Если находим элемент с заданным значением
          for (let j = i; j < this.count - 1; j++) {
            this.array[j] = this.array[j + 1]; // Сдвигаем остальные элементы на его место
          }
          this.count--; // Уменьшаем счетчик элементов
          found = true; // Устанавливаем флаг в true, так как элемент был найден и удален
          break; // Прерываем цикл, так как удаление выполнено
        }
      }
      return found; // Возвращаем значение флага
    }
  }
  
  // Пример использования
  let da = new DynamicArray();
  da.addArray([1, 2, 3, 4, 5]);
  console.log(da.array); // Выведет: [ 1, 2, 3, 4, 5, <3 empty items> ]
  
  
  console.log(da.removeValue(2)); // Выведет: true, так как элемент 2 был найден и удален
  console.log(da.removeValue(6)); // Выведет: false, так как элемент 6 не найден