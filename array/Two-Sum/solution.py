class Solution:
    def twoSum(self, nums, target):
        hashMap = {}
        for i, ele in enumerate(nums):
            complementary = target - ele
            if complementary in hashMap:
                return [hashMap[complementary], i]
            hashMap[ele] = i
        raise "no match" 
            
