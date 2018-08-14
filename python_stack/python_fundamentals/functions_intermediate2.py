x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
students[0]['last_name'] = 'Bryant'
sports_directory['soccer'][0] = 'Andres'
z[0]['y'] = 30

def iterateDictionary(listOfDictionary):
    for dictionary in listOfDictionary:
        print('first_name - ' + dictionary['first_name'] + ', last_name - ' + dictionary['last_name'])

def iterateDictionary2(targetKey, listOfDictionary):
    for dictionary in listOfDictionary:
        print(dictionary[targetKey])

dojo = {
   'location': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printDojoInfo(dojo):
    for info in dojo:
        print(len(dojo[info]), info.upper())
        for item in dojo[info]:
            print(item)
        print()
    