
// check if stings are anagram of each other

function anagram(str1, str2){

    if (str1.split('').sort().join('') == str2.split('').sort().join('')){
      return true
    }
    else return false
}
console.log(anagramUsingObject("", ""))



function anagramUsingObject(str1,str2){
  if (str1.length !== str2.length){
    return false
  }
  str1Object = {}
  str2Object = {}

  for (let i of str1){
    console.log(i)
    str1Object[i] = (str1Object[i] || 0 ) + 1
  }
  for (let i of str2){
    str2Object[i] = (str2Object[i] || 0 ) + 1
  }
  for (let key in str1Object){
    if (! (str1Object[key] === str2Object[key] && key in str2Object))
      return false
  }
  return true
}
