function solution (n, k, data) {
  // 初始化总花费和当前食物数量
  let costSum = data[0] // 第一天必须购买食物
  let currentFood = 1 // 第一天购买1份食物
  if (k === 1) {
    for (let a = 1; a < data.length; a++) {
      costSum += data[a]
    }
    return costSum
  }
  for (let i = 0; i < data.length; i++) { // 虽然第一天必须购买食物，但是第一天也要和第二天比较，如果第一天价格低，第一天就需要买k份，所以i还是要从0开始
    console.log(costSum)
    // 检查当前食物是否足够支撑到下一天
    if (currentFood < 1) {
      // 如果不够，计算需要购买多少食物
      const neededFood = 1 - currentFood
      // 购买食物，更新总花费和当前食物数量
      costSum += neededFood * data[i]
      currentFood += neededFood
    }

    // 每天消耗1份食物
    currentFood--

    // 检查是否需要购买更多食物以应对未来几天的价格
    let maxFoodToBuy = k - currentFood // 最多可以购买的食物数量
    console.log('maxFoodToBuy: ', maxFoodToBuy, data[i])
    for (let j = 1; j <= maxFoodToBuy && i + j < data.length; j++) {
      console.log('additionalFood0: ', data[i], data[i + j])
      if (data[i] < data[i + j]) { // 如果当前价格比未来某一天的价格低，购买食物
        const additionalFood = Math.min(maxFoodToBuy, j) // 买几份，遇到今天比明天价格低的食物，看看还能不能携带，如果可以，就购买能携带的数量
        console.log('additionalFood: ', additionalFood, data[i], j)
        costSum += additionalFood * data[i]
        currentFood += additionalFood
        maxFoodToBuy -= additionalFood
      } else {
        break // 如果当前价格比未来某一天的价格高，就不需要购买更多食物了
      }
    }
  }
  console.log(costSum)
  return costSum
}

function main () {
  // Add your test cases here
  console.log(solution(5, 2, [1, 2, 3, 3, 2]) === 9)
  console.log(solution(6, 3, [4, 1, 5, 2, 1, 3]) === 9)
  console.log(solution(4, 1, [3, 2, 4, 1]) === 10)
}

main()
