class ValidPair:
    def __init__(self, start, end):
        self.start = start
        self.end = end

class Solution:
    def isValid(self, s):
        validPairs = [ValidPair("(", ")"), ValidPair("[", "]"), ValidPair("{", "}")]
        allStartTags = list(map(lambda x: x.start, validPairs))
        allEndTags = list(map(lambda x: x.end, validPairs))
        length = len(s)
        endTagsInStr = []
        for index in range(length - 1, -1, -1):
            if s[index] in allEndTags:
                endTagsInStr.append(s[index])
            elif s[index] in allStartTags:
                if len(endTagsInStr) == 0:
                    return False
                endTag = endTagsInStr.pop()
                if (allStartTags.index(s[index]) != allEndTags.index(endTag)):
                   return False
        if len(endTagsInStr) != 0:
            return False
        return True
            
print(Solution().isValid("()"))
print(Solution().isValid("()[]{}"))
print(Solution().isValid("(]"))
print(Solution().isValid("([)]"))
print(Solution().isValid("{[]}"))
