import Node from './node'

class Tree {
  constructor (rootNode) {
    this.rootNode = rootNode
  }

  search (value, node = this.rootNode) {
    if (!this.rootNode) {
      return null
    } else if (value < node.getValue()) {
      console.log('less than root')
    } else if (value > node.getValue()) {
      console.log('greater than root')
    }
  }

  insert (value, node = this.rootNode) {
    if (!this.rootNode) {
      this.rootNode = node
    }

    if (value < node.getValue()) {
      if (node.getLeftChild() === null) {
        node.setLeftChild(new Node(value))
      } else {
        this.insert(value, node.getLeftChild())
      }
    } else if (value > node.getValue()) {
      if (node.getRightChild() === null) {
        node.setRightChild(new Node(value))
      } else {
        this.insert(value, node.getRightChild())
      }
    }
  }

  delete () {

  }
}

export default Tree
