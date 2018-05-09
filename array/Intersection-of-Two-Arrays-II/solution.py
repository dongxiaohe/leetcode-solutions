class Solution:
    def intersect(self, nums1, nums2):
        len1 = len(nums1)
        len2 = len(nums2)
        nums1.sort()
        nums2.sort()
        i = 0
        j = 0
        result = []

        while i < len1 and j < len2:
            if nums1[i] > nums2[j]:
                    j += 1
            elif nums1[i] < nums2[j]:
                    i += 1
            else:
                result.append(nums1[i])
                i += 1
                j += 1

        return result

print(Solution().intersect([1, 2, 2, 1], [2, 2]))
