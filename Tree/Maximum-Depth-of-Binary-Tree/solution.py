class Solution:
    def maxDepth(self, root):
        length = len(root)
        if length == 0:
            return 0
        elif length == 1:
            return 1
        nodesCount = 1
        totalNodesCount = 1 
        result = 1
        while length > totalNodesCount:
            nodesCount = 2 * nodesCount 
            totalNodesCount += nodesCount 
            result += 1
        return result

print(Solution().maxDepth([3,9,20,-1,-1,15,7]))
