class Solution:
    def moveZeroes(self, nums):
        length = len(nums)                 
        i = 0
        count = 0 
        while i < length:
            if nums[i] == 0:
                del nums[i]
                length -= 1
                count += 1
            else:
                i += 1
        while count > 0:
            nums.append(0)
            count -= 1


