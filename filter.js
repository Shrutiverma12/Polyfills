function customMap(callback, arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
function myFunction(num) {
  return num % 2 === 0;
}

let x = customMap(myFunction, numbers);
console.log(x);
