# import the python testing framework
import unittest, math

# our "unit"
# this is what we are running our test on
def reverseList(array):
    for index in range(math.floor(len(array)/2)):
        array[index], array[len(array)-index-1] = array[len(array)-index-1], array[index]
    return array

def isPalindrome(word):
    palindromeFlag = True
    for index in range(math.floor(len(word)/2)):
        if word[index] != word[len(word)-index-1]:
            palindromeFlag = False
    return palindromeFlag

def coin(cents):
    change = []
    change.append(math.floor(cents/25))
    cents %= 25
    change.append(math.floor(cents/10))
    cents %= 10
    change.append(math.floor(cents/5))
    cents %= 5
    change.append(math.floor(cents))
    return change

def factorial(number):
    if number <= 1:
        return 1
    return number*factorial(number-1)

def fib(number):
    if number == 1:
        return 0
    if number == 2:
        return 1
    return fib(number-2)+fib(number-1)

# our "unit tests"
# initialized by creating a class that inherits from unittest.TestCase
class reverseListTest(unittest.TestCase):
    def test1(self):
        return self.assertEqual(reverseList([1,3,5]), [5,3,1])
    def test2(self):
        return self.assertEqual(reverseList([2,4,-3]), [-3,4,2])
    def test3(self):
        return self.assertEqual(reverseList([2,4,-3,5]), [5,-3,4,2])

class isPalindromeTest(unittest.TestCase):
    def test1(self):
       return self.assertEqual(isPalindrome("racecar"), True)
    def test2(self):
       return self.assertEqual(isPalindrome("rabbit"), False)
    def test3(self):
       return self.assertEqual(isPalindrome("mirror"), False)
    def test4(self):
       return self.assertEqual(isPalindrome("mom"), True)
    def test5(self):
       return self.assertEqual(isPalindrome("hannah"), True)

class coinTest(unittest.TestCase):
    def test1(self):
        return self.assertEqual(coin(87), [3,1,0,2])
    def test2(self):
        return self.assertEqual(coin(92), [3,1,1,2])
    def test3(self):
        return self.assertEqual(coin(99), [3,2,0,4])
    def test4(self):
        return self.assertEqual(coin(23), [0,2,0,3])
    def test5(self):
        return self.assertEqual(coin(43), [1,1,1,3])

class factorialTest(unittest.TestCase):
    def test1(self):
        return self.assertEqual(factorial(1), 1)
    def test2(self):
        return self.assertEqual(factorial(0), 1)
    def test3(self):
        return self.assertEqual(factorial(2), 2)
    def test4(self):
        return self.assertEqual(factorial(3), 6)
    def test5(self):
        return self.assertEqual(factorial(4), 24)
    def test6(self):
        return self.assertEqual(factorial(5), 120)

class fibTest(unittest.TestCase):
    def test1(self):
        return self.assertEqual(fib(1), 0)
    def test2(self):
        return self.assertEqual(fib(2), 1)
    def test3(self):
        return self.assertEqual(fib(3), 1)
    def test4(self):
        return self.assertEqual(fib(4), 2)
    def test5(self):
       return self.assertEqual(fib(5), 3)
    def test6(self):
       return self.assertEqual(fib(6), 5)
    def test7(self):
       return self.assertEqual(fib(7), 8)
    def test8(self):
       return self.assertEqual(fib(8), 13)
    def test9(self):
       return self.assertEqual(fib(9), 21)
    def test10(self):
       return self.assertEqual(fib(10), 34)

if __name__ == '__main__':
    unittest.main() # this runs our tests
