class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  //   insert a node

  insertNode(head, val) {
    let node = new BST(val);
    if (!head) return node;

    if (val < head.value) head.left = this.insertNode(head.left, val);
    else head.right = this.insertNode(head.right, val);

    return head;
  }

  //   deletion of node
}

const bst = new BST(3);

bst.insertNode(bst, 1);
bst.insertNode(bst, 2);
bst.insertNode(bst, 3);
bst.insertNode(bst, 4);
bst.insertNode(bst, 5);
bst.insertNode(bst, 6);

console.log(bst);

// deletion of a node
var deleteNode = function (root, key) {
  if (!root) return null;

  if (key < root.val) root.left = deleteNode(root.left, key);
  else if (key > root.val) root.right = deleteNode(root.right, key);
  else {
    if (!root.right) return root.left;
    else if (!root.left) return root.right;

    let cur = root.right;
    while (cur.left) {
      cur = cur.left;
    }
    root.val = cur.val;
    root.right = deleteNode(root.right, root.val);
  }
  return root;
};
