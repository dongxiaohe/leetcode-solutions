class Solution:
    def twoSum(self, nums, target):
        i = 0
        j = len(nums) - 1
        sortedArr = sorted(nums)
        while (i < j):
            total = sortedArr[i] + sortedArr[j]
            if total == target:
               return [nums.index(sortedArr[i]), nums.index(sortedArr[j])]
            elif total > target:
               j -= 1
            else: 
               i += 1
        return [];

solution = Solution()
print(solution.twoSum([2, 7, 11, 15], 9))
print(solution.twoSum([2, 7, 11, 15, 3], 5))
print(solution.twoSum([2, 7, 11, 15, 30], 37))
