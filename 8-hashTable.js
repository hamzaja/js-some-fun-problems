function hash(item, arrayLength){
  let total= 0;
  for(let i=0; i<item.length; i++){
    let value = item[i].charCodeAt(0)-96
    total = (total * 17 + value)% arrayLength
  }
  return total
}
