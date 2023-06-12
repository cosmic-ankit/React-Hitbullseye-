let arr = [1,2,3,4,5];
let subset = arr.slice(1,3);
console.log(subset);
console.log(arr);

arr.splice(2,1);
console.log(arr);
arr.splice(2,0,6);
console.log(arr);
