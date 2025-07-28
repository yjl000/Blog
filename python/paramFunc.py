import numbers


def calc(*numbers):
  sum = 0
  for i in numbers:
    sum = sum + i*i
  return sum
nums = [1, 2, 3]
print(calc(*nums))

def person(name, age, **kw):
  print('name: ', name, 'age: ', age, 'other: ', kw)
extra = {'city': 'beijing', 'job': 'python'}
person('ken', 25, **extra)

def mul(*z):
  sum = 1
  for i in z:
    sum = sum * i
  return sum
print(mul(5))