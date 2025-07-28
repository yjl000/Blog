def abs_func(x):
  if not isinstance(x, (int, float)):
    raise TypeError("bad operand type")
  if x > 0:
    return x
  else:
    return -x

print(abs_func('haha'))