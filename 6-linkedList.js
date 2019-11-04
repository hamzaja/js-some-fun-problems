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





  (function() {
  onload = setInterval(function(){
  if (document.querySelectorAll(".timer")[1].firstElementChild.innerText === "00:00:00"){
      document.querySelectorAll(".floattopright")[2].click()}
   }, 1000);
  })();



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
    
  }




}
let list = new SinglyLinkedList()
console.log(list.push('Abc'))
console.log(list.push('def'))
console.log(list.push('ghi'))
