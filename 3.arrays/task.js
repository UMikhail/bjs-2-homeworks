function compareArrays(arr1, arr2) {
  let result = (arr1.length === arr2.length) && (arr1.every((element, index) => element === arr2[index])) //сравниваем массивы по элементам и индексам
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(element => element > 0).filter(element => element % 3 === 0).map(element => element * 10) //фильтруем элементы массива: 1)элементы > 0; 2)элементы должны делиться на 3 без остатка; 3)возвращаем новый массив где элементы умножены на 10
  return resultArr; // array
}
