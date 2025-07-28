function solution (numbers) {
  // Please write your code here

  function computedCount (index, sum) {
    if (index === numbers.length) {
      return sum % 2 === 0 ? 1 : 0
    }
    let count = 0
    for (const n of numbers[index].toString()) {
      count += computedCount(index + 1, sum + parseInt(n, 10))
    }

    return count
  }

  return computedCount(0, 0)
}

function main () {
  // You can add more test cases here
  console.log(solution([123, 456, 789]) === 14)
  console.log(solution([123456789]) === 4)
  console.log(solution([14329, 7568]) === 10)
}

main()
