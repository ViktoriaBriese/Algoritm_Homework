function quickSort(array) {
    let stack = [];
    stack.push(0); // Начальный индекс первого подмассива
    stack.push(array.length - 1); // Конечный индекс первого подмассива

    while (stack.length > 0) {
        let end = stack.pop(); // Извлекаем конечный индекс подмассива
        let start = stack.pop(); // Извлекаем начальный индекс подмассива

        let pivotIndex = partition(array, start, end); // Определяем опорный элемент и его позицию

        if (pivotIndex - 1 > start) { // Если есть элементы слева от опорного
            stack.push(start); // Добавляем начальный индекс левого подмассива
            stack.push(pivotIndex - 1); // Добавляем конечный индекс левого подмассива
        }

        if (pivotIndex + 1 < end) { // Если есть элементы справа от опорного
            stack.push(pivotIndex + 1); // Добавляем начальный индекс правого подмассива
            stack.push(end); // Добавляем конечный индекс правого подмассива
        }
    }
}

function partition(array, start, end) {
    let pivot = array[end]; // Выбираем опорный элемент
    let indexPivot = start; // Индекс меньшего элемента и указывает на правильную позицию

    for (let i = start; i < end; i++) {
        if (array[i] >= pivot) { // Условие для сортировки по убыванию
            swap(array, i, indexPivot);
            indexPivot++;
        }
    }
    swap(array, end, indexPivot); // Перемещаем опорный элемент в правильную позицию

    return indexPivot;
}

function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

let testArray = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSort(testArray);
console.log(testArray); // [-4, 7, 6, 5, 4, 2, 1, 0, -2]
