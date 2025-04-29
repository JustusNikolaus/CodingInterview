const logTree = require('console-log-tree');

// const data = ['root', 'A', 'B']
const data = ['root', 'A', 'B', 'C', 'D', 'E', 'F']
// const data = ['root', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']
/*
{
    name: Root,
    children: [
            {
                name: A,
                children: [
                    {
                        name: C
                    },
                    {
                        name: D
                    }
                ]
            },
            {
                name: B,
                children: [
                    {
                        name: E
                    },
                    {
                        name: F
                    }
                ]
            }
        ]
}
*/
/**
 * Recursive function for drawing the tree with console-log-tree
 * @param {Array} data - All nodes of the tree, in order
 * @param {Number} curr - Current node
 * @returns The Node in correct format
 */
const drawNode = (data, curr) => {
}

const tree = drawNode(data, 1)

const treeStr = logTree.parse(tree)

console.log(treeStr)

