class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def levelOrder(self, root):
        result = []
        self.levelElements(root, 0, result)
        return result
        
    def levelElements(self, root, index, result):
        if root is None:
            return
        else:
            if (len(result) <= index):
                result.insert(index, [root.val])
            else:
                result[index].append(root.val)
            self.levelElements(root.left, index + 1, result)
            self.levelElements(root.right, index + 1, result)

