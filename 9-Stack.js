// queue using linked list  FIFO


class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0
  }
  enQueue(val){
    let newVal = new Node(val)
    if(!this.first){
      this.first = newVal
      this.last = newVal
    }
    else{
      this.first.next = this.first
      this.first = val
    }
    this.length++
    return val
  }
  dequeue(){
    if(!this.first) return null
    if(this.first === this.last){
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return this
  }
}




class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}
