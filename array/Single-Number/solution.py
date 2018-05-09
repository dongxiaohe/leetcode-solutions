class Solution:
    def singleNumber(self, nums):
        result = {}    
        for ele in nums:
            if ele in result:
                del result[ele]
            else:
                result[ele] = ele
        for ele in result.items():
            return ele[0]

print(Solution().singleNumber([2,2,1]))
print(Solution().singleNumber([4,1,2,1,2]))
