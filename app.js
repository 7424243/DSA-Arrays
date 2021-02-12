/* ===== 5. URLify a string ===== 
Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be
*/
function urlifyString(string) {
    const array = string.split('')
    const formattedArray = array.map(item => {
        if(item === ' ') {
            return item = '%20'
        }     
        return item
    })
    console.log(formattedArray.join(''))
    return formattedArray.join('')
}
urlifyString('tauhida parveen') //output: tauhida%20parveen
urlifyString('www.thinkful.com /tauh ida parv een')//output: www.thinkful.com%20/tauh%20ida%20parv%20een
//O(n)

/* ===== 6. Filtering an array ===== 
Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.
*/
function filterArray(array) {
    const underFive = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 5) {
            underFive.push(array[i])
        }
    }
    console.log(underFive)
    return underFive;
}
filterArray([10, 2, -3, 4, -2, 1, 5, 3, 7])//output: [ 2, -3, 4, -2, 1, 3 ]
//O(n)

/* ===== 7. Max sum in the array ===== 
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.
*/
function maxSum(array) {
    let currentSum = 0
    let maxSum = 0
    for(let i = 0; i < array.length; i++) {
        currentSum = currentSum + array[i]
        if(currentSum > currentSum + array[i + 1]) {
            maxSum = currentSum
        }
    }
    console.log(maxSum)
}
maxSum([4, 6, -3, 5, -2, 1])//output: 12
//O(n^k)

/* ===== 8. Merge arrays ===== 
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.
*/
function mergeArrays(arr1, arr2) {
    const newArray = arr1.concat(arr2)
    newArray.sort(function(a, b) {
        return a - b
    })
    console.log(newArray)
}
mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])//output: [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
//O(n)

/* ===== 9. Remove characters ===== 
Write an algorithm that deletes given characters from a string. Do not use Javascript's filter, split, or join methods.
*/
function removeChar(string, delimiter) {
    let delimiterArray = []
    let stringArray = []
    for(let i = 0; i < delimiter.length; i++) {
        delimiterArray.push(delimiter.charAt(i))
    }
    for(let i = 0; i < string.length; i++) {
        stringArray.push(string.charAt(i))
    }
    delimiterArray.forEach(delimiterChar => {
        stringArray.forEach((stringChar, index) => {
            if(delimiterChar === stringChar) {
                stringArray.splice(index, 1)
            }
        })
    })
    console.log(stringArray.join(''))
}
removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')//ouput: 'Bttl f th Vwls: Hwi vs. Grzny'
//O(n^k)

/* ===== Products =====
Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index.
*/
function products(array) {
    let results = []
    for(let i = 0; i < array.length; i++) {
        let product = 1
        for(let j = 0; j < array.length; i++) {
            if(i !== j) {
                product = results * array[j]
            }
        }
        results.push(product)
    }
    console.log(results)
    return results
}
products([1, 3, 9, 4])//output: [108, 36, 12, 27]
//O(n^k)

/* ===== 11. 2D Array ===== 
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.
*/
function array2D(array) {
    const originalArray = JSON.parse(JSON.stringify(array))
    let newArray = array
    originalArray.map((row, rowI) => {
        row.map((item, arrI) => {
            if(item === 0) {
                newArray[rowI].forEach((num, i) => newArray[rowI][i] = 0)
                newArray.forEach(newRow => newRow[arrI] = 0)
            }
        })
    })
    console.log(newArray)
    return newArray
}
array2D([[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]])
//output: [
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 1, 1, 0 ],
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 1, 1, 0 ]
//     ]
//O(n^k)

/* ===== 12. String rotation ===== 
Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
*/
function stringRotation(str1,str2){
    if(str1.length !== str2.length){
      return false;
    }
    let doublestr1 = str1 + str1;
  console.log(doublestr1)
    if(doublestr1.indexOf(str2) === -1){
      return false;
    } else {
      return true;
    }
  }
  console.log(stringRotation('amazon','azonam'))//output: true
  //O(n)
