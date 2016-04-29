import Tree from './tree'
import Node from './node'

const rootNode = new Node(10)
const tree = new Tree(rootNode)
tree.insert(9)
tree.insert(11)
tree.insert(12)
tree.insert(1)
tree.insert(120)
console.log(JSON.stringify(tree, null, 2))
//console.log(tree.search(11))
