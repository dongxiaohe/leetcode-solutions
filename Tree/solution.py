class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isValidBST(self, root, min = -math.inf, max = math.inf):
        if root is None:
            return True
        if root.val > min and root.val < max and self.isValidBST(root.left, min, root.val) and self.isValidBST(root.right, root.val, max):
            return True
        else:
            return False

