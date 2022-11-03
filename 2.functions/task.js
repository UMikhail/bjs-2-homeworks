// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity
  max = -Infinity
  sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]   //находим сумму значений массива
    if (arr[i] > max) {
      max = arr[i]  //находим максимальное значение массива
    }
    if (arr[i] < min) {
      min = arr[i]  //находим минимальное значение массива
    }
  }

  avg = sum / arr.length //находим среднее значение массива
  avg = Number(avg.toFixed(2)) //округляем получившееся значение до двух знаков после запятой и возвращаем это значение из string в number

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] // считаем сумму элементов массива
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0
  for (let i = 0; i < arrOfArr.length; i++) {
    let element = func(arrOfArr[i]) // включаем функцию для каждого элемента массива
    if (element > max) {
      max = element //ищем максимальное значение элемента
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let minMeaning = Infinity
  let maxMeaning = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxMeaning) {
      maxMeaning = arr[i]  //находим максимальное значение массива
    }
    if (arr[i] < minMeaning) {
      minMeaning = arr[i]  //находим минимальное значение массива
    }
  }
  return Math.abs(maxMeaning - minMeaning) //находим разницу max и min, метод Math.abs() - вычисление модуля
}