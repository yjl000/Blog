def createCounter():
  x = 0
  def counter():
    nonlocal x
    x = x + 1
    return x
  return counter

counterA = createCounter()
print(counterA(), counterA(), counterA(), counterA(), counterA())

counterB = createCounter()
if [counterB(), counterB(), counterB(), counterB()] == [1, 2, 3, 4]:
    print('测试通过!')
else:
    print('测试失败!')