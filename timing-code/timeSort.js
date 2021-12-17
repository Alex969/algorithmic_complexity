let arr1 = [];

const timeSort = (array, size) => {
  for(let i = 0; array.push(i++) < size;)
  let start = performance.now();
  array.sort((a,b) => a - b);
  let end = performance.now();
  console.log(`Size : ${array.length}`)
  console.log(`Execution time: ${end - start} ms`);
}

timeSort(arr1, 5000);
timeSort(arr1, 10000);
timeSort(arr1, 15000);
timeSort(arr1, 20000);
timeSort(arr1, 25000);
timeSort(arr1, 30000);
timeSort(arr1, 35000);
timeSort(arr1, 40000);
timeSort(arr1, 45000);
timeSort(arr1, 50000);
timeSort(arr1, 55000);
timeSort(arr1, 60000);
timeSort(arr1, 65000);
timeSort(arr1, 70000);
timeSort(arr1, 75000);
timeSort(arr1, 80000);
timeSort(arr1, 85000);
timeSort(arr1, 90000);
timeSort(arr1, 95000);
timeSort(arr1, 100000);