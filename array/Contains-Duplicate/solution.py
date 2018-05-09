class Solution:
    def containsDuplicate(self, nums):
        nums.sort()
        if len(nums) <= 1: 
            return False
        head = nums[0] 
        for ele in nums[1:]:
            if ele == head:
                return True
            head = ele
        return False
