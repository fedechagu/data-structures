class Node {
  constructor (value, left = null, right = null) {
    this.left = left
    this.right = right
    this.value = value
  }

  getValue () {
    return this.value
  }

  setValue (value) {
    this.value = value
  }

  getLeft () {
    return this.left
  }

  getRight () {
    return this.right
  }

  setLeft (value) {
    this.left = value
  }

  setRight (value) {
    this.right = value
  }
}

export default Node
