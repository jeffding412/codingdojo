class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SList:
    def __init__(self, value):
        node = Node(value)
        self.head = node
    
    def addNode(self, value):
        node = Node(value)
        current = self.head
        while current.next != None:
            current = current.next
        current.next = node
    
    def printAllValues(self):
        current = self.head
        while current != None:
            print(current.value)
            current = current.next

    def removeNode(self, value):
        current = self.head
        if current == None:
            return False
        elif current.value == value:
            self.head = current.next
        while current.next != None:
            if current.next.next == None and current.next.value == value:
                current.next = None
                break
            if current.next.value == value and current.next.next != None:
                current.next = current.next.next
            current = current.next

    def insertNode(self, value, index):
        current = self.head
        node = Node(value)
        if index == 0:
            node.next = self.head
            self.head = node
        else:
            current = self.head
            count = 1
            while current.next != None and count <= index:
                if count == index:
                    node.next = current.next
                    current.next = node
                current = current.next
                count += 1
            if count == index:
                current.next = node
                node.next = None




        
        
        


list = SList(5)
list.addNode(4)
list.addNode(3)
list.addNode(7)
list.insertNode(4, 4)
list.printAllValues()