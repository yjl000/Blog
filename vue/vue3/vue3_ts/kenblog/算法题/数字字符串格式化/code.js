function solution (s) {
  // write code here
  const n = parseFloat(s)
  const test1 = /(?=(?!\b)(\d{3})+\.?\b)/g
  const newS = (n + '').replace(test1, ',')
  const test2 = /(^|\s)\d+(?=\.?\d*($|\s))/g
  // console.log(n)
  const s2 = (newS.includes('.') && newS.split('.')[1])
  const s3 = (s2 + '').includes(',') ? s2.replace(',', '') : s2
  console.log(s3)
  const lastS = newS.includes('.') ? newS.split('.')[0] + '.' + s3 : newS
  console.log(lastS)

  return lastS
}

function main () {
  console.log(solution('1294512.12412') === '1,294,512.12412')
  console.log(solution('0000123456789.99') === '123,456,789.99')
  console.log(solution('987654321') === '987,654,321')
}

main()
