//  Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.

function findKthElement(arr1, arr2, k) {
    let result = [];
    let i = 0, j = 0;
  
    // сравниваем элементы массивов и добавляем их в result
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
  
    // добавляем оставшиеся элементы arr1 в result
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
  
    // добавляем оставшиеся элементы arr2 в result
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  
    // возвращаем k-й элемент из result
    return result[k - 1];
  }
  
  // Пример использования
  let arr1 = [100, 112, 256, 349, 770];
  let arr2 = [72, 86, 113, 119, 265, 445, 892];
  let k = 7;
  
  let kthElement = findKthElement(arr1, arr2, k);
  console.log(kthElement); // Вывод: 256