// return all duplicate numbers of an array


function dupicate(arr){
  let allNumbers = {}
  let duplicate = []
  for (let i of arr){
    allNumbers[i] = (allNumbers[i] || 0) + 1
    if (allNumbers[i] === 2){
      duplicate.push(i)
    }
  }

  return duplicate.sort()
}

console.log(dupicate([1,6,2,34,5,1,6,74,4,4]))
