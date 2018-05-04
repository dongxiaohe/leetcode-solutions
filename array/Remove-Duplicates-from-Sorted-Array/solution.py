class Solution:
    def removeDuplicates(self, nums):
        count = 0
        while count < len(nums):
            if count > 0 and nums[count] == nums[count - 1]:
                nums.remove(nums[count])
            else:
                count += 1
        return count

print(Solution().removeDuplicates([1,1,2]))
print(Solution().removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

