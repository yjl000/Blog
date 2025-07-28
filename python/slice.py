L = ['andy', 'python', 'python3', 'python4', 'python5', 'python6']
# print(L[0:3])
L1 = list(range(100))
# print(L1[::5])

def trim(str):
  if len(str) == 0:
    return str
  if(str[0] == ' '):
    while(str[0] == ' '):
      str = str[1:]
      return trim(str)
  elif(str[-1] == ' '):
    while(str[-1] == ' '):
      str = str[:-1]
      return trim(str)
  else:
    return str
  return str
if trim('hello  ') != 'hello':
    print('测试失败1!')
elif trim('  hello') != 'hello':
    print('测试失败2!')
elif trim('  hello  ') != 'hello':
    print('测试失败3!')
elif trim('  hello  world  ') != 'hello  world':
    print('测试失败4!')
elif trim('') != '':
    print('测试失败5!')
elif trim('    ') != '':
    print('测试失败6!')
else:
    print('测试成功!')