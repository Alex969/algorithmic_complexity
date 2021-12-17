let arr1 = [];

const timeReverse = (array, size) => {
  for(let i = 0; array.push(i++) < size;){};
  let start = performance.now();
  array.reverse();
  let end = performance.now();
  console.log(`Size : ${array.length}`)
  console.log(`Execution time: ${end - start} ms`);
}

timeReverse(arr1, 5000);
timeReverse(arr1, 10000);
timeReverse(arr1, 15000);
timeReverse(arr1, 20000);
timeReverse(arr1, 25000);
timeReverse(arr1, 30000);
timeReverse(arr1, 35000);
timeReverse(arr1, 40000);
timeReverse(arr1, 45000);
timeReverse(arr1, 50000);
timeReverse(arr1, 55000);
timeReverse(arr1, 60000);
timeReverse(arr1, 65000);
timeReverse(arr1, 70000);
timeReverse(arr1, 75000);
timeReverse(arr1, 80000);
timeReverse(arr1, 85000);
timeReverse(arr1, 90000);
timeReverse(arr1, 95000);
timeReverse(arr1, 100000);