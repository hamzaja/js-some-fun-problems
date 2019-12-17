// built in methods
let arr = [1,2,343,346,457,5,867,8,67,8,56,345,34,5,5,3,3,45,23,53,46,45,65,4]
function compareNumber(n1, n2){
  console.log(n1,n2)
  return n1-n2
}
console.log(arr.sort())
console.log(arr.sort(compareNumber))
