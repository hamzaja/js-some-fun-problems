class HashTable {
  constructor(size=53){
    this.keymap = new Array(size)
  }
  _hash(key){
    let total = 0;
    let prime =31
    for( let i=0; i < Math.min(key.length,100); i++){
      let char = key[i]
      let val = char.charCodeAt(0)-96
      total = (total * prime + val) % this.keyMap.length
    }
    return total;
  }
}

//
// function hash(item, arrayLength){
//   let total= 0;
//   for(let i=0; i<item.length; i++){
//     let value = item[i].charCodeAt(0)-96
//     total = (total * 17 + value)% arrayLength
//   }
//   return total
// }
