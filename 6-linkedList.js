// class Node{
//   constructor(val){
//     this.val = val
//     this.next = null
//   }
// }
// let first= new Node("hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// console.log(first)



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

}
let list = new SinglyLinkedList()
console.log(list.push('Abc'))
console.log(list.push('def'))
console.log(list.push('ghi'))
console.log(list.push('jkl'))
