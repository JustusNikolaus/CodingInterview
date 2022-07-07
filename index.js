const logTree = require('console-log-tree');

const data = ['root', 'A', 'B']
// const data = ['root', 'A', 'B', 'C', 'D', 'E', 'F']
// const data = ['root', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']

/**
 * Recursive function for drawing the tree with console-log-tree
 * @param {Array} tree - All nodes of the tree, in order
 * @param {Number} curr - Current node
 * @returns The Node in correct format
 */
const drawNode = (tree, curr) => {
}


const tree = {
    name: data[0],
    children: [
        drawNode(data, 2),
        drawNode(data, 3)
    ]
}

const treeStr = logTree.parse(tree)

console.log(treeStr)

