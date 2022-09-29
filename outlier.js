
/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.
*/

//Examples:

let oddArray = [2, 4, 0, 100, 4, 11, 2602, 36] //Should return: 11 (the only odd number)
// const odd = oddArray.filter(number => number % 2 === 1);
// console.log(odd)

const evenArray = [160, 3, 1719, 19, 11, 13, -21] //Should return: 160 (the only even number)
// const even = evenArray.filter(number =>  number % 2 === 0);
// console.log(even)

// function outlier(arr) {
//     const oddOutlier = arr.filter(num => num % 2 === 1);
//     const evenOutlier = arr.filter(num =>  num % 2 === 0);
//     if (oddOutlier.length === 1) {
//         return oddOutlier[0];
//     } else {
//         return evenOutlier[0];
//     }
// };

const outlier = (arr) => {
    const oddOutlier = arr.filter(num => num % 2 === 1);
    const evenOutlier = arr.filter(num =>  num % 2 === 0);
    if (oddOutlier.length === 1) {
        return oddOutlier[0];
    } 
    return evenOutlier[0];
};

console.log(outlier(oddArray))
console.log(outlier(evenArray))