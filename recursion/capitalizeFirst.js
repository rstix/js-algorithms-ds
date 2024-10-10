// capitalizeFirst

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeFirst(arr) {
  if (!arr.length) return [];
  return [capitalizeFirstLetter(arr[0]), ...capitalizeFirst(arr.slice(1))];
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

console.log(capitalizeFirst(['car', 'taco', 'banana']));
