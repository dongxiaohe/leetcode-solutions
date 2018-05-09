class Solution:
    def rotate(self, nums, k):
        while k > 0:
            ele = nums.pop()
            nums.insert(0, ele)
            k = k - 1

print(Solution().rotate([1,2,3,4,5,6,7], 3))
print(Solution().rotate([-1,-100,3,99], 2))
