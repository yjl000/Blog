
function solution (n, k, data) {
  // Edit your code here
  let costSum = data[0]
  let currentFood = 1
  if (k === 1) {
    data.forEach((a, i) => {
      if (i > 0) {
        costSum += a
      }
    })
    return costSum
  }

  for (let i = 0; i < n; i++) { // 天数倒计时
    if (currentFood < 1) {
      costSum += data[i]
      currentFood = 1
    }

    currentFood-- // 每天减少一份食物
    // 能携带的最多食物
    let mostFood = k - currentFood
    // 寻找后面能带的食物
    for (let j = 1; j <= mostFood && (i + j) < n; j++) {
      if (data[i] < data[i + j]) { // 当前食物和下一天相比
        // 食物是低价，对比还能带多少食物
        const minFoodNum = Math.min(mostFood, j)
        // 能带多少食物，就要加上话费
        costSum += minFoodNum * data[i]
        // 更新携带的食物数量
        currentFood += minFoodNum
        // 更新能带的食物上限
        mostFood -= minFoodNum
      } else { // 当前食物不是最低价，并且还有食物，就跳过这个补给站
        break
      }
    }
  }
  return costSum
}

function main () {
  // Add your test cases here
  console.log(solution(5, 2, [1, 2, 3, 3, 2]) === 9)
  console.log(solution(6, 3, [4, 1, 5, 2, 1, 3]) === 9)
  console.log(solution(4, 1, [3, 2, 4, 1]) === 10)
}

main()
