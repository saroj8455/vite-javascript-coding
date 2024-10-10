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

// console.log(getLargestElement([1, 3, 4, 2, 5, 8, 10, 30]));
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

// console.log(checkSubset(arr1, arr2));

const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);
let someOver17 = numbers.some((val) => val > 17);

function myFunction(value, index, array) {
  return value > 18;
}
// console.log(someOver18);
// console.log(someOver17);

const ar = [1, 2, 3];
const ar1 = [2, 3, 4, 5];
function intersection(ar, ar1) {
  const st = ar.filter((val) => ar1.includes(val));
  // console.log(st);
}

intersection(ar, ar1);
// console.log(null + 1);

function fibonacci(n) {
  if (n <= 0) {
    return 'Input should be a positive integer';
  } else if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  } else {
    let fibArr = [0, 1];
    while (fibArr.length < n) {
      fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
    // return fibArr[fibArr.length - 1];
    return fibArr;
  }
}

// console.log(fibonacci(3));

function fibo(n) {
  // base case
  if (n <= 0) return 'Input should be a positive Integer';
  if (n == 1) return 0;
  if (n == 2) return 1;

  let prev = 0,
    curr = 1;
  let fiboSeries = [0, 1];
  // base case upto 2 so that's why i=3
  for (let i = 3; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
    fiboSeries.push(curr);
  }
  // return curr; op: last index : 34
  return fiboSeries;
}

console.log(fibo(10));
const nums = [0, 1, 1, 2, 3];

function totalNums(nums) {
  let sum = 0;
  // for loop
  // for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  // }

  // while loop
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }

  return sum;
}

// console.log(totalNums(nums));
console.log(42 === '42');
console.log(42 + '42');
console.log(1 + true);
if (1) {
  console.log('-1 true');
} else {
  console.log('null false');
}
console.log(2 * '10');

// console.log(null == undefined);
// console.log(null === undefined);
// console.log('5' == 5);
// console.log('5' === 5);
// console.log([] == false);
// console.log([] == '');
// console.log('' == false);
// console.log([] == {});

Array.prototype.customForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

Array.prototype.customForEachTwo = function (callback, thisctx) {
  if (typeof callback !== 'function') throw 'pass a callback function!';

  const length = this.length;
  let i = 0;
  while (i < length) {
    callback.call(thisctx, this[i], this);
    i++;
  }
};

const marks = [1, 2, 3, 4, 5];
marks.customForEach((mark) => {
  console.log(mark);
});

// marks.customForEachTwo({});

const os = {
  cpus: 'num of core 1',
  cpus: 'num of core 2',
};
console.log(os.cpus);
