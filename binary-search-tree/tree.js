import Node from './node'

class BinarySearchTree {
  constructor (rootNode = null) {
    this.rootNode = rootNode
  }

  search (value) {
    let found = false
    let search = (value, node) => {
      if (node) {
        if (value === node.getValue()) {
          found = true
        } else if (value < node.getValue()) {
          search(value, node.getLeft())
        } else if (value > node.getValue()) {
          search(value, node.getRight())
        }
      }
    }
    search(value, this.rootNode)
    return found
  }

  insert (value, node = this.rootNode) {
    if (!value || isNaN(value)) {
      throw new Error('Value to insert must be a number')
    }
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

    this.traverseInOrder((val) => list.push(val))
    return list
  }

  toArrayInverse () {
    let list = []
    if (!this.rootNode) {
      return list
    }

    this.traverseInOrder((val) => list.unshift(val))
    return list
  }

  height () {
    let leftHeight = 0
    let rightHeight = 0

    if (!this.rootNode) {
      return 0
    }

    let calculateHeight = (node) => {
      if (node.getLeft() !== null) {
        leftHeight++
        calculateHeight(node.getLeft())
      }
      if (node.getRight() !== null) {
        rightHeight++
        calculateHeight(node.getRight())
      }
    }
    calculateHeight(this.rootNode)
    return Math.max(leftHeight, rightHeight)
  }

  length () {
    let length = 0
    let cb = (val) => {
      length++
    }
    this.traverseInOrder(cb)
    return length
  }

  min () {
    return this._minMax('min')
  }

  max () {
    return this._minMax('max')
  }

  traverseInOrder (cb, node = this.rootNode) {
    if (node) {
      this.traverseInOrder(cb, node.getLeft())
      cb(node.getValue())
      this.traverseInOrder(cb, node.getRight())
    }
  }

  _minMax (type) {
    let val = null
    if (!this.rootNode) {
      return val
    }
    let search = (node) => {
      if (type === 'min') {
        if (node.getLeft() === null) {
          val = node.getValue()
        } else {
          search(node.getLeft())
        }
      } else if (type === 'max') {
        if (node.getRight() === null) {
          val = node.getValue()
        } else {
          search(node.getRight())
        }
      }
    }
    search(this.rootNode)
    return val
  }
}

export default BinarySearchTree
