class MathDojo:
    def __init__(self):
        self.result = 0
    
    def add(self, arg1, *args):
        self.result += arg1
        numbers = list(args)
        for number in numbers:
            self.result += number
        return self

    def subtract(self, arg1, *args):
        self.result -= arg1
        numbers = list(args)
        for number in numbers:
            self.result -= number
        return self

md = MathDojo()
x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)