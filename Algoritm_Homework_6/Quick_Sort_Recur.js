function quickSort(array, start, end) {
    if (start < end) {
        let indexPivot = partition(array, start, end);
        // большие элементы слева
        quickSort(array, start, indexPivot - 1);
        // меньшие элементы справа
        quickSort(array, indexPivot + 1, end);
    }
}

function partition(array, start, end) {
    let pivot = array[end]; // выбираем опорный элемент
    let indexPivot = start; 

    for (let i = start; i < end; i++) {
        if (array[i] >= pivot) { // условие для сортировки по убыванию
            swap(array, i, indexPivot);
            indexPivot++;
        }
    }
    swap(array, end, indexPivot); 

    return indexPivot;
}

function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

let testArray = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSort(testArray, 0, testArray.length - 1);
console.log(testArray); // [-4, 7, 6, 5, 4, 2, 1, 0, -2]
