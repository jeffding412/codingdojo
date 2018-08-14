def basic():
    for number in range(0,151):
        print(number)

def multiplesOfFive():
    for number in range(5, 1000001):
        if(number%5 == 0):
            print(number)

def countingTheDojoWay():
    for number in range(1,101):
        if(number%10 == 0):
            print("Dojo")
        elif(number%5 == 0):
            print("Coding")

def whoaThatSuckersHuge():
    sum = 0
    for number in range(0, 500001):
        if(number%2 == 1):
            sum += number
    print(sum)

def countdownByFours():
    number = 2018
    while(number > 0):
        print(number)
        number -= 4

def flexibleCountdown(lowNum, highNum, mult):
    for number in range(lowNum, highNum+1):
        if(number%mult == 0):
            print(number)

flexibleCountdown(2,9,3)