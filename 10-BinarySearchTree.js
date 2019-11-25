
// let tree = new BinarySearchTree()
// tree.root = new Node(10)
// tree.root.right = new Node(15) // right children should be bigger than parent
// tree.root.left = new Node(5)  // left children should be smaller than parent
// tree.root.left.right = new Node(9)



class Node{
  constructor(val){
    this.value = val
    this.right = null
    this.left = null
  }
}


class BinarySearchTree{
  constructor(){
    this.root = null
  }
  // insert(val){
  //   let value  = new Node(val)
  //   if(!this.root){
  //     this.root = value
  //   }else{
  //     let currentNode = this.root;
  //     while(true){
  //
  //       if(val>currentNode.value){
  //         if(!currentNode.right){
  //           currentNode.rigth = value
  //           break
  //         }else(currentNode = currentNode.right)
  //       }
  //       else{
  //         if(!currentNode.left){
  //           currentNode.left = value
  //           break
  //         }else(currentNode = currentNode.left)
  //       }
  //
  //     }
  //   }
  //   return this
  // }
  insert(value){
    const newNode = new Node(value);
    if(this.root === null){
        this.root = newNode;
        return this;
    }
    const current = this.root;
    while(true){
        if(value === current.value) return undefined;
        if(value < current.value){
            if(current.left === null){
                current.left = newNode;
                return this;
            }
            current = current.left;
        } else {
            if(current.right === null){
                current.right = newNode;
                return this;
            }
            current = current.right;
        }
    }
}
  insert(value){
    let newNode = new Node(value)
    if(!this.root){
      this.root = newNode
      return this
    }
      let current = this.root
      while(true){
        if(value < current.value){
          if(!current.left){
            current.left = newNode
            return this
          }
          else{
            current = current.left
          }
        }
        else if (value > current.value) {
            if(!current.rigth){
              current.right = newNode
              return this
            }else({
              current = current.right
            })
          }
          else if (value === current.value) {
            current.duplicate++
            return this
          }
      }
  }

  // find(val){
  //   if(!this.root) return false
  //   let current = this.root
  //   while (true) {
  //     if(current.left === null && current.right === null){
  //       return false
  //     }
  //     else if(val > current.value ){
  //       current = current.right
  //     }
  //     else if(val < current.value){
  //       current = current.left
  //     }
  //     else if(val === current.value){
  //       return true
  //     }
  //   }
  //
  // }

  find(value){
    if(this.root === null) return false;
    var current = this.root,
        found = false;
    while(current && !found){
        if(value < current.value){
            current = current.left;
        } else if(value > current.value){
            current = current.right;
        } else {
            found = true;
        }
    }
    if(!found) return undefined;
    return current;
  }

// tree traversal
// breath first search
  bfs(){
    let data = []
    let queue = []
    queue.push(this.root)
    while (queue.length) {
      queue.shift()
      data.push(node.value)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data
  }

  // depth first search pre order
  dfsPreOrder(){
    let data = []
    function traverse(Node){
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }





}
