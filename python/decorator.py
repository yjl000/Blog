import functools
import time
def log(func):
  @functools.wraps(func)
  def warpper(*args, **kw):
    print('call %s():' % func.__name__)
    return func(*args, **kw)
  return warpper

@log
def now():
  print('2023-03-30')

now()

print(now.__name__)

t = time.localtime()
def excutedTime(func):
  @functools.wraps(func)
  def wrapper(*args, **kw):
    print('%s now time is %s-%s-%s' % (func.__name__,t.tm_year, t.tm_mon, t.tm_mday), )
    return func(*args, **kw)
  return wrapper

@excutedTime
def fast(x, y):
  time.sleep(0.0012)
  return x+y

@excutedTime
def slow(x, y, z):
  time.sleep(0.1234)
  return x * y * z

# print(fast(11, 22))
f = fast(11, 22)
s = slow(11, 22, 33)

if f != 33:
    print('测试失败!')
elif s != 7986:
    print('测试失败!')