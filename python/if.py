age = 8
if age > 18:
  print('adult')
elif age > 6:
  print('teenager')
else:
  print('young')

print('you age is ', age)

# s = input('birth: ')
# birth = int(s)
# if birth < 2000:
#   print('00前')
# else:
#   print('00后')
h = input('请输入您的身高: ')
w = input('请输入您的体重: ')
height = float(h)
weight = float(w)
bmi = weight / (height * height)
print(bmi)
if bmi < 18.5:
  print('过轻')
elif bmi >= 18.5 and bmi < 25:
  print('正常')
elif bmi >= 25 and bmi < 28:
  print('过重')
elif bmi >= 28 and bmi < 32:
  print('肥胖')
elif bmi >= 32:
  print('严重肥胖')