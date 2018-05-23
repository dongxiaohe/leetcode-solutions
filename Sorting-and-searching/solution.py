class Solution(object):
    def firstBadVersion(self, n):
        return self.binarySearchFirstBadVersion(1, n)
    def binarySearchFirstBadVersion(self, start, end):
        if end - start <= 1:
            if isBadVersion(start):
                return start
            return end
        mid = start + int((end - start) / 2)
        if isBadVersion(mid):
            return self.binarySearchFirstBadVersion(start, mid)
        else:
            return self.binarySearchFirstBadVersion(mid, end)
            

