class Solution:
    def maxProfit(self, prices):
        length = len(prices)
        i = length - 1
        j = length - 2
        result = 0
        profit = 0
        while i > 0:
            tmpProfit = prices[i] - prices[j]
            if tmpProfit <= 0:
                result += profit
                i = j 
                profit = 0
            elif tmpProfit > profit:
                profit = tmpProfit
            else:
                result += profit 
                i = j
                profit = 0
            
            if j == 0:
                result += profit
                return result 
            j -= 1        

        return result

print(Solution().maxProfit([7,1,5,3,6,4]))
print(Solution().maxProfit([1,2,3,4,5]))
print(Solution().maxProfit([7,6,4,3,1]))
