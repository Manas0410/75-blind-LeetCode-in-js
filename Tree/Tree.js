class Tree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  queue = [this];

  //   inserting a node
  insertNode(val) {
    let newNode = new Tree(val);
    while (this.queue.length) {
      let currentNode = this.queue.shift();
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else this.queue.push(currentNode.left);
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else this.queue.push(currentNode.right);
    }
  }

  //   traversal

  preorderTraversal(node) {
    console.log(node.val);
    if (node?.left) this.preorderTraversal(node.left);
    if (node?.right) this.preorderTraversal(node.right);
  }

  postOrderTraversal(node) {
    if (node?.left) this.preorderTraversal(node.left);
    if (node?.right) this.preorderTraversal(node.right);
    console.log(node.val);
  }

  inOrderTraversal(node) {
    if (node?.left) this.preorderTraversal(node.left);
    console.log(node.val);
    if (node?.right) this.preorderTraversal(node.right);
  }

  breadthFirstTraversal(node) {
    let nodeQueue = [node];
    while (nodeQueue.length) {
      const curr = nodeQueue.shift();
      console.log(curr.val);
      if (curr?.left) nodeQueue.push(curr.left);
      if (curr?.right) nodeQueue.push(curr.right);
    }
  }
}
