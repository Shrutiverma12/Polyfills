function customMap(callback, arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const numbers = [65, 44, 12, 4];
function myFunction(num) {
  return num * 10;
}

let x = customMap(myFunction, numbers);
console.log(x);
