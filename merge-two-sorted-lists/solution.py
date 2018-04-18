class Solution:
    class ListNode:
        def __init__(self, x):
            self.val = x
            self.next = None

    def mergeTwoLists(self, l1, l2):
        result = ListNode(0)
        head = result
        while l1 or l2:
            if l1 == None:
                result.next = l2
                break
            if l2 == None:
                result.next = l1
                break
            if l1.val == l2.val:
                result.next = ListNode(l1.val)
                result=result.next
                result.next = ListNode(l2.val)
                result=result.next
                l1 = l1.next 
                l2 = l2.next 
            elif l1.val < l2.val:
                result.next = ListNode(l1.val)
                result=result.next
                l1 = l1.next
            else:
                result.next = ListNode(l2.val)
                result = result.next
                l2 = l2.next

        return head.next

