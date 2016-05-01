import Node from './node'

class BinarySearchTree {
  constructor (rootNode = null) {
    this.rootNode = rootNode
  }

  traverse (node, fn) {
    if (node) {
      this.traverse(node.getLeft(), fn)
      fn(node.getValue())
      this.traverse(node.getRight(), fn)
    }
  }

  contains (value) {
    let found = false

    let search = (value, node) => {
      if (node) {
        console.log(node)
        if (value === node.getValue()) {
          console.log('found')
          found = true
        } else if (value < node.getValue()) {
          this.search(value, node.getLeft())
        } else if (value > node.getValue()) {
          this.search(value, node.getRight())
        }
      }
    }
    search(value, this.rootNode)
    return found
  }

  insert (value, node = this.rootNode) {
    if (!this.rootNode) {
      this.rootNode = new Node(value)
      return
    }

    if (value < node.getValue()) {
      if (node.getLeft() === null) {
        node.setLeft(new Node(value))
      } else {
        this.insert(value, node.getLeft())
      }
    } else if (value > node.getValue()) {
      if (node.getRight() === null) {
        node.setRight(new Node(value))
      } else {
        this.insert(value, node.getRight())
      }
    }
  }

  toString () {
    return JSON.stringify(this, null, 4)
  }

  toArray () {
    let list = []
    if (!this.rootNode) {
      return list
    }

    let cb = (val) => {
      list.push(val)
    }

    this.traverse(this.rootNode, cb)
    return list
  }
}

export default BinarySearchTree
