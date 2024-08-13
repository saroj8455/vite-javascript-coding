import './style.css';

Array.prototype.customForEach = function (callback) {
  if (typeof callback === 'function') {
    callback.call(this);
  }
};

function getLargestElement(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getLargestElement([1, 3, 4, 2, 5, 8, 10, 30]));
const inputArray = [3, 1, 4, 2, 5, 8, 10, 30];

function smallItem(inputArr) {
  let min = inputArr[0];
  for (let i = 1; i < inputArr.length; i++) {
    if (min > inputArr[i]) {
      min = inputArr[i];
    }
  }
  return min;
}

// console.log(smallItem(inputArray));
const arr1 = ['a', 'b', 'c'];
const arr2 = ['c', 'a'];
const arr3 = ['c', 'd'];

function checkSubset(parentArry, subsetArry) {
  return subsetArry.every((el) => {
    return parentArry.includes(el);
  });
}

console.log(checkSubset(arr1, arr2));

const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);
let someOver17 = numbers.some((val) => val > 17);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18);
console.log(someOver17);

const ar = [1, 2, 3];
const ar1 = [2, 3, 4, 5];
function intersection(ar, ar1) {
  const st = ar.filter((val) => ar1.includes(val));
  console.log(st);
}

intersection(ar, ar1);
console.log(null + 1);
