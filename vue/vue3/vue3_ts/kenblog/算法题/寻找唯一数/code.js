function solutiong (cards) {
  let res = cards[0]
  for (let i = 1; i < cards.length; i++) {
    res = res ^ cards[i]
  }
  return res
}

function main () {
  console.log(solutiong([1, 1, 2, 2, 3, 3, 4, 5, 5]) === 4)
  console.log(solutiong([0, 1, 0, 1, 2]) === 2)
}
main()
