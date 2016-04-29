class Node {
  constructor (value, leftChild = null, rightChild = null) {
    this.leftChild = leftChild
    this.rightChild = rightChild
    this.value = value
  }

  getValue () {
    return this.value
  }

  setValue (value) {
    this.value = value
  }

  getLeftChild () {
    return this.leftChild
  }

  getRightChild () {
    return this.rightChild
  }

  setLeftChild (value) {
    this.leftChild = value
  }

  setRightChild (value) {
    this.rightChild = value
  }
}

export default Node
