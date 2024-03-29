// class Node{
//   constructor(val){
//     this.val = val
//     this.next = null
//   }
// }
let first= new Node("hey,")
first.next = new Node("there")
first.next.next = new Node("how")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you")
console.log(first)



class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList{
  constructor(){
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val){
    let newNode = new Node(val)
    if (!this.head){
      this.head = newNode
      this.tail = this.head
    }
    else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop(){
    if (!this.head) return undefined
    let current = this.head
    let newtail = current
    while (current.next){
      newtail = current
      current = current.next
    }
    this.tail = newtail
    this.tail.next = null
    this.length--
    if(this.length === 0 ){
      this.head = null
      this.tail = null
    }
    return current;
  }
  shift(){
    if (!this.head) return undefined
    let oldhead = this.head
    let newhead = this.head.next
    this.head = null
    this.head = newhead
    this.length--
    return oldhead

  }
  unshift(val){
      let newhead = new Node(val)
      if(!this.head){
        this.head = newhead
        this.tail = this.head
      }
      else{
        newhead.next = this.head
        this.head = newhead
      }
      this.length++
      return this
  }
  get(ind){
    if (ind < 0 || ind > this.length) return undefined
    let val = this.head;
    for (let i=0; i<ind; i++){
      val = val.next
    }
    return val
  }
  set(ind, value){
      if(this.get(ind)){
        return this.get(ind).val = value
      }
  }
  insert(ind, value){
    if(ind<0 || ind > this.length) return false
    if(ind === this.length){
      this.push(value)
      return true
    }
    if(ind === 0) return !!this.unshift(value)
    let newNode = new Node(value)
    let previous = this.get(ind-1)
    let placeHolder = previous.next
    previous.next = newNode
    newNode.next = placeHolder
    this.length++
    return true

  //   let placeHolder = this.get(ind)
  //   let newNode = new Node(value)
  //   let nextNode
  //   if(placeHolder){
  //     nextNode = placeHolder.next
  //     placeHolder.next = newNode
  //     newNode.next = nextNode
  //     this.length++
  //   }
  //   return this
  }
  remove(ind){
    if(ind < 0 || index >= this.length) return false
    if(ind === 0) return !!this.shift()
    if(ind === this.length-1) return !!this.pop()
    let previousvalue = this.get(ind-1)
    let valueToRemove = previous.next
    let nextValue = valueToRemove.next
    previousvalue.next = nextValue
    valueToRemove = null
    this.length--
    return true
  }
  reverse(){
    let headPlaceHolder = this.head
    this.head = this.tail
    this.tail = headPlaceHolder
    let next, previous=null;
    for(let i=0; i < this.length; i++){
      next = headPlaceHolder.next
      headPlaceHolder.next = previous
      previous = headPlaceHolder
      headPlaceHolder = next
    }
    return this
  }






//   function removeNodes(listHead, x) {
//     // Write your code here
//     let val = listHead;
//     let previous = null
//     while(val.next==null){
//         if(val.next > x){
//             val = val.next.next
//         }else(val = val.next)
//     }
//     return val
//
// }

}
let list = new SinglyLinkedList()
console.log(list.push('hey'))
console.log(list.push('how'))
console.log(list.push('are'))
console.log(list.push('you'))
