class Animal:
    def __init__(self,name,health):
        self.name = name
        self.health = health
    
    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayHealth(self):
        print(self.health)
        return self
        
class Dog(Animal):
    def __init__(self,name):
        super().__init__(name, 150)

    def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    def __init__(self,name):
        super().__init__(name, 170)

    def fly(self):
        self.health -= 10
        return self
    
    def displayHealth(self):
        super().displayHealth()
        print("I am a Dragon")
        return self

animal = Animal("Bruh", 100)
animal.walk().walk().walk().run().run().displayHealth()
dog = Dog("Spots")
dog.walk().walk().walk().run().run().pet().displayHealth()
dragon = Dragon("Toothless").fly().displayHealth()