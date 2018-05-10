class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isSymmetric(self, root):
        if root is None:
            return True
        else:
            return self.isMirrored(root.left, root.right)
    def isMirrored(self, left, right):
        if left is None or right is None:
            return left is None and right is None
        return left.val == right.val and self.isMirrored(left.left, right.right) and self.isMirrored(left.right, right.left)
