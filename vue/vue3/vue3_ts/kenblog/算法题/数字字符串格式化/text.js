function solution (s) {
  // write code here
  const num = parseFloat(s)
  let [intN, floatN] = num.toString().split('.')
  const test = /(?=(?!\b)(\d{3})+\.?\b)/g
  intN = (intN.toString()).replace(test, ',')
  if (floatN) {
    intN = intN + '.' + floatN
  }
  return intN
}

function main () {
  console.log(solution('1294512.12412') === '1,294,512.12412')
  console.log(solution('0000123456789.99') === '123,456,789.99')
  console.log(solution('987654321') === '987,654,321')
}

main()
