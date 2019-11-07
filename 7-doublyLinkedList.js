class Node{
  constructor(val){
    this.val = val
    this.next = null
    this.previous = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val){
    let node = new Node(val)
    if(!this.head){
      this.head = node
      this.tail = node
      this.head.next = this.tail
      this.tail.previous = this.head.next
    }
    else{
      this.tail.next= node
      node.previous = this.tail
      this.tail = node
    }
    this.length++
    return this
  }
  pop(){
    if(!this.head) return undefined
    let tail = this.tail
    if(this.length===1){
      this.head = null
      this.tail = null
    } else {
      this.tail = tail.previous
      this.tail.next = null
      tail.previous = null
    }
    this.length--
    return tail
  }

}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
