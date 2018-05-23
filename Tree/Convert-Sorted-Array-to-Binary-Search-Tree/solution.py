class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def sortedArrayToBST(self, nums):
        length = len(nums)
        if length == 0:
            return None
        return self.recToBST(nums, 0, length - 1)
    def recToBST(self, nums, start, end):
        if start > end:
            return None
        mid = start + int((end - start) / 2) 
        node = TreeNode(nums[mid])
        node.left = self.recToBST(nums, start, mid - 1)
        node.right = self.recToBST(nums, mid + 1, end)
        return node 

print(Solution().sortedArrayToBST([-10,-3,0,5,9]).left.val)
print(Solution().sortedArrayToBST([-10,-3,0,5,9]).left.right.val)
print(Solution().sortedArrayToBST([-10,-3,0,5,9]).right.left)
print(Solution().sortedArrayToBST([-10,-3,0,5,9]).right.right.val)
