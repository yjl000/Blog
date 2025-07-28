import math
def quadratic(a, b, c):
  if a == 0:
    return 'a不能为0'
  for i in (a, b, c):
    if not isinstance(i, (int, float)):
      raise TypeError('bad operand type')
  delta = b**2 - 4*a*c
  if delta < 0:
    return '无解'
  else:
    return ((-b + math.sqrt(delta)) / (2 * a), (-b - math.sqrt(delta)) / (2 * a))
  
result = quadratic(1, 3, -4)
print(result)