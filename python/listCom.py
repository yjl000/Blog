L1 = [x * x for x in range(1, 11)]
print(L1)

L2 = [m + n for m in 'ABC' for n in 'XYZ']
print(L2)

d = {'x': 'A', 'y': 'B', 'z': 'C'}
L3 = [k + '=' + v for k, v in d.items()]
print(L3)

L4 = ['Hello', 'World', 18, 'Apple', None]
L5 = [s.lower() for s in L4 if isinstance(s, str)]
print(L5)
if L5 == ['hello', 'world', 'apple']:
    print('测试通过!')
else:
    print('测试失败!')