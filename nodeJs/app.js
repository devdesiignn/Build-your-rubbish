//Declare a Function the takes an array as paramenter and
//Returns the sum of the array

//Named Function Approach
const sum = function (array) {
  const result = array.reduce(function (accumulator, currentItem) {
    return accumulator + currentItem;
  }, 0);
  return result;
};

//Arrow Function Approach
// const sum = (array) =>
//   array.reduce((accumulator, currentItem) => accumulator + currentItem, 0);

//test
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
 