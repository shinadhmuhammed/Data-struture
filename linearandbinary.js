///////////////////////////////linear search//////////////////////////////////


// function linearSearch(arr,target){
//     for(var i=0;i<=arr.length;i++){
//         if(arr[i]===target){
//             return i
//         }
//     }
//     return -1
// }
// let arrayToSearch = [2, 3, 4, 5, 6, 7];
// let targetValue = 6;
// console.log(linearSearch(arrayToSearch, targetValue));



// function stringLinearSearch(arr,target){
//     for(var i=0;i<=arr.length;i++){
//         if(arr[i]===target){
//             return i
//         }
//     }
//     return -1
// }
// let stringArray = ["apple", "banana", "orange", "grape", "kiwi"];
// let targetString = "orange";
// console.log(stringLinearSearch(stringArray, targetString)); 


/////////////////////////////////binary search ///////////////////////////////////////



// function binarySearch(arr,target){
//     let leftIndex=0
//     let rightIndex=arr.length-1

//     while(leftIndex <= rightIndex){
//         let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//         if(arr[middleIndex]===target){
//             return middleIndex
//         }
//         if(target < arr[middleIndex]){
//             rightIndex=middleIndex-1
//         }else{
//             leftIndex=middleIndex+1
//         }
//     }
//     return -1;
// }


// let array=[2,3,4,5,7,8,9,10]
// let targetValues=9
// console.log(binarySearch(array,targetValues))



// function binarySearchFloat(arr,target){
//     let leftIndex=0
//     let rightIndex=arr.length-1

//     while(leftIndex <= rightIndex){
//         let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//         if(arr[middleIndex]===target){
//             return middleIndex
//         }
//         if(target < arr[middleIndex]){
//             rightIndex=middleIndex-1
//         }else{
//             leftIndex=middleIndex+1
//         }
//     }
//     return -1;
// }
// let floatArray = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9];
// let targetFloat = 5.5;
// console.log(binarySearchFloat(floatArray, targetFloat)); 




// function recursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

//    function search(arr,target,leftIndex,rightIndex){
//         let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//         if(target===arr[middleIndex]){
//             return middleIndex
//         }

//         if(target<=arr[middleIndex]){
//             return search(arr,target,leftIndex,rightIndex-1)
//         }else{
//             return search(arr,target,leftIndex+1,rightIndex)
//         }
//    }

//    console.log(recursiveBinarySearch([1,2,3,4,5,6],3))




// function findClosestElement(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     let closestIndex = -1; // Variable to store the index of the closest element

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (arr[middleIndex] === target) {
//             return arr[middleIndex]; // If target is found, return the target itself
//         }

//         // Update the closestIndex if the current element is closer to the target
//         if (closestIndex === -1 || Math.abs(arr[middleIndex] - target) < Math.abs(arr[closestIndex] - target)) {
//             closestIndex = middleIndex;
//         }

//         if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         } else {
//             leftIndex = middleIndex + 1;
//         }
//     }

//     // Return the element at the closest index
//     return arr[closestIndex];
// }

// let array = [2, 3, 4, 5, 7, 8, 9, 10];
// let targetValue = 1; // Change the target value to test different cases
// console.log(findClosestElement(array, targetValue));




// function binarySearch(arr,target){
//     let left=0
//     let right=arr.length-1
//     while(left<=right){
//         let middle=Math.floor((left+right)/2)
//         if(arr[middle]===target){
//             return middle
//         }
//         if(arr[middle]<target){
//             left=middle+1
//         }else{
//             right=middle-1
//         }
//     }
//     return -1
// }

// let array=[2,4,6,8,9,10]
// let targetValue=8
// console.log(binarySearch(array,targetValue))



// function linearSearch(arr,target){
//     for(i=0;i<=arr.length;i++){
//         if(arr[i]===target){
//             return i
//         }
//     }
//     return -1
// }

// let array=[9,2,3,4,5,1]
// let target=5
// console.log(linearSearch(array,target));