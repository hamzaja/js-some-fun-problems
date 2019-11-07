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
  shift(){
    if(!this.head)return undefined
    let oldHead = this.head
    if(this.length===1) {
      this.head = null
      this.tail = null
    }else {
      this.head = oldHead.next
      this.head.previous = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }
  unshift(val){
    let newHead = new Node(val)
    if(!this.head){
      this.head = newHead
      this.tail = newHead
    }else{
      newHead.next = this.head
      this.head.previous = newHead
      this.head = newHead
    }
    this.length++
    return this
  }
  get(ind){
    if (ind < 0 || ind > this.length) return undefined
    let val
    if (ind >= this.length/2){
      val = this.head
      for(let i=0; i<=ind; i++){
        val = val.next
      }
    }else {
      val = this.tail
      for (let i=0; i<=ind;i++){
        val= val.previous
      }
    }
    return val.val
  }

}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(9)
list.push(10)
list.push(11)
list.push(12)
list.push(13)
