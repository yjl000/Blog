function solution (numbers) {
  // 递归函数，用于计算所有可能的组合
  function countCombinations (index, currentSum) {
    console.log('index:', index)
    // 如果已经遍历完所有数字组
    if (index === numbers.length) {
      // 检查当前和是否为偶数
      console.log('currentSum: ', currentSum)
      return currentSum % 2 === 0 ? 1 : 0
    }

    let count = 0
    // 遍历当前数字组中的每个数字
    for (const digit of numbers[index].toString()) {
      console.log(digit, index, currentSum + parseInt(digit))
      // 递归调用，计算下一个数字组的组合
      count += countCombinations(index + 1, currentSum + parseInt(digit))
    }
    console.log('count: ', count, index)
    return count
  }

  // 从第一个数字组开始递归计算
  console.log('in in')
  return countCombinations(0, 0)
}

function main () {
  // 你可以添加更多测试用例
  console.log(solution([123, 456, 789]) === 14)
  // console.log(solution([123456789]) === 4)
  // console.log(solution([14329, 7568]) === 10)
}

main()
