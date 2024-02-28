// Ханойская башня
// Задача заключается в следующем:
// Имеется три стержня — левый, средний и правый. На левом стержне находятся n дисков, диаметры которых различны. Диски упорядочены по размеру диаметра, сверху лежит наименьший, снизу — наибольший. Требуется перенести диски с левого стержня на правый, используя средний стержень как вспомогательный.

// Головоломка имеет следующие два правила:
// ●	Вы не можете поместить больший диск на меньший диск.
// ●	За один раз можно перемещать только один диск.
// Реализуйте два подхода для решения.
// ○	Итеративно
// ○	Рекурсивно

function hanoiIterative(n, from, to, aux) {
    const stack = [];
    let moves = 0;
    
    while (true) {
        while (n > 1) {
            stack.push({ n, from, to, aux });
            n--;
            [to, aux] = [aux, to];
        }
        moves++;
        console.log(`Move disk from ${from} to ${to}`);
        if (stack.length === 0) break;
        ({ n, from, to, aux } = stack.pop());
        moves++;
        console.log(`Move disk from ${from} to ${to}`);
        n--;
        [from, aux] = [aux, from];
    }
    console.log(`Total moves: ${moves}`);
  }
  
  hanoiIterative(3, 'left', 'right', 'middle');

  function hanoiRecursive(n, from, to, aux) {
    if (n === 1) {
        console.log(`Move disk from ${from} to ${to}`);
        return;
    }
    hanoiRecursive(n - 1, from, aux, to);
    console.log(`Move disk from ${from} to ${to}`);
    hanoiRecursive(n - 1, aux, to, from);
  }
  
  hanoiRecursive(3, 'left', 'right', 'middle');