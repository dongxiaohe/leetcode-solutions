class Solution(object):
    def rotate(self, matrix):
        matrix.reverse()
        n = len(matrix)
        for i in range(0, n):
            for j in range(i+1, n):
                print(i, j, matrix[i][j], matrix[j][i])
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        return matrix
print(Solution().rotate([[1,2,3],[4,5,6],[7,8,9]]))
