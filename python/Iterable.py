def findMinAndMax(L):
  min = 0
  max = 0
  if(len(L) == 0):
    return (None, None)
  elif (len(L) == 1):
    min = L[0]
    max = L[0]
    return (min, max)
  elif (len(L) >= 2):
    min = L[0]
    max = L[0]
    for i in L:
      if (min > i):
        min = i
      if (max < i):
        max = i
    return (min, max)
  else: 
    return (None, None)
# findMinAndMax([7, 1])
if findMinAndMax([]) != (None, None):
    print('测试失败1!')
elif findMinAndMax([7]) != (7, 7):
    print('测试失败2!')
elif findMinAndMax([7, 1]) != (1, 7):
    print('测试失败3!')
elif findMinAndMax([7, 1, 3, 9, 5]) != (1, 9):
    print('测试失败4!')
else:
    print('测试成功!')