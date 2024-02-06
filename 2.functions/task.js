function getArrayParams(...arr) {

  if (arr === undefined || arr.length === 0) {
    return 0;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b);

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  return arr === undefined || arr.length === 0 ? 0 : arr.reduce((a, b) => a + b);
}

function differenceMaxMinWorker(...arr) {

  return arr === undefined || arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {

  if (arr === undefined || arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i = i + 1){
    if (arr[i] % 2 === 0){
      sumEvenElement = sumEvenElement + arr[i];
    } else if (arr[i] % 2 !== 0){
      sumOddElement = sumOddElement + arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

  if (arr === undefined || arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {

  if (arrOfArr.length === 0) {
    return 0;
  }

  let maxWorkerResult = -Infinity;
  let numbers;


  for (let i = 0; i < arrOfArr.length; i = i + 1) {
    numbers = arrOfArr[i];
    const res = func(...numbers);
    if (res > maxWorkerResult){
      maxWorkerResult = res;
    }
  }

  return maxWorkerResult;
}
