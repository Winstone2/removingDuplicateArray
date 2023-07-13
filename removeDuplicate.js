function removeDuplicates(arr) {
    return Array.from(new Set(arr));
    //The Set object is a built-in JavaScript object that allows you to store unique values of any type.
    // By passing the array arr as an argument to the Set constructor, a new Set object is created with the elements of the array.
    // Since a Set can only contain unique values, any duplicate elements in the original array will be automatically removed.
    //The Array.from() method is used to create a new array from an iterable object or array-like object.
    // In this case, it is used to convert the Set object, which contains the unique elements of the original array, into a new array.
    //The resulting array with the unique elements is then returned from the removeDuplicates function.
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
// const numbers = [1, 2, 2, 3, 4, 4, 5]; declares an array called numbers with some duplicate elements.
// console.log(removeDuplicates(numbers)); calls the removeDuplicates function, passing the numbers array as an argument.
// The function removes the duplicate elements and returns a new array [1, 2, 3, 4, 5], which is then printed to the console.
console.log(removeDuplicates(numbers));
//In summary, the code uses a Set object to remove duplicate elements from an array and then converts the resulting Set object back into an array using Array.from().
