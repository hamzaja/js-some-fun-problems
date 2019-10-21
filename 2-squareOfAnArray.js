// check if the array is the sqare array of other array return true else false
const { performance } = require('perf_hooks')

function squareArray(arr1 , arr2){

  if (arr1.length !== arr2.length){
    return false
  }
  for (let i=0; i<= arr1.length-1 ; i++){
    indexNumber = arr2.indexOf( arr1[i] ** 2 )
    if (indexNumber === -1){
      return false
    }
    else( arr2.splice(indexNumber,1) )
  }
  return true
}


function squareArrayUsingObjects(arr1, arr2){
  if  (arr1.length !== arr2.length){
    return false;
  }
  objectOfArray1 = {}
  objectOfArray2 = {}
  for (let i = 0 ; i < arr1.length ; i++){
    objectOfArray1[arr1[i]] = (objectOfArray1[arr1[i]] || 0 ) + 1
  }
  for (let i = 0 ; i < arr2.length ; i++) {
    objectOfArray2[arr2[i]] = (objectOfArray2[arr2[i]] || 0 ) + 1
  }
  for ( let key in objectOfArray1){
    if (! (key ** 2) in objectOfArray2 ){
      return false
    }
    if (objectOfArray1[key] !== objectOfArray2[key ** 2]){
      return false
    }
  }
  return true
}

let fakeArray = Array.from(Array(100000).keys())
let fakeArraySquare = [];
fakeArray.map(a => (fakeArraySquare.push(a**2)))





let t0 = performance.now()
squareArrayUsingObjects([3,5,1,3],[1,25,9,9])
squareArrayUsingObjects([3,5,1,3,4,3,5,1,3,1],[10,1,25,9,9,16,1,25,9,9])
squareArrayUsingObjects(fakeArray,fakeArraySquare)
let t1 = performance.now()
let time = t1-t0
console.log("square Array Using Objects: performance time = " + ( time ) + "MS" )




t0 = performance.now()
squareArray([3,5,1,3],[1,25,9,9])
squareArray([3,5,1,3,4,3,5,1,3],[1,25,9,9,16,1,25,9,9])
squareArray(fakeArray,fakeArraySquare)

t1 = performance.now()
time = t1-t0
console.log("square Array Using iteration : performance time = " + ( time ) + "MS" )
