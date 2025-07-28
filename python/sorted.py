def by_name(t):
  return t[0]

L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]
L2 = sorted(L, key=by_name)
print(L2)

def by_score(t):
  return t[1]

L3 = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]
L4 = sorted(L, key=by_score, reverse=True)
print(L4)