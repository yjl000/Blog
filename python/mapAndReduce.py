from functools import reduce


strList = ['adam', 'LISA', 'barT']
def normalize(name):
  name = name.lower()
  return name[0: 1].upper() + name[1:]

res = list(map(normalize, strList))
print(res)

numList = [3, 5, 7, 9]
def fn(x, y):
  return x * y
def prod(nList):
  sum = reduce(fn, nList)
  return sum
print(prod(numList))
if prod([3, 5, 7, 9]) == 945:
    print('测试成功!')
else:
    print('测试失败!')


def str2float(str):
  digits = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'n': 0, 'point': ''}
  def numFun(x, y):
    if x == '.' or y == '.':
      digits['point'] = '.'
      return x
    if digits['point'] == '.':
      return x + (y / pow(10, digits['n']))
    return x * 10 + y
  def char2num(s):
    if digits['n'] >= 0: 
      digits['n'] = digits['n'] + 1
    if s == '.':
      digits['n'] = 0
      return '.'
    return digits[s]
  return reduce(numFun, map(char2num, str))

# print('str2float(\'123.456\') =', str2float('123.456'))
# print(abs(str2float('123.456')))
print('str2float(\'123.456\') =', str2float('123.456'))
if abs(str2float('123.456') - 123.456) < 0.00001:
    print('测试成功!')
else:
    print('测试失败!')