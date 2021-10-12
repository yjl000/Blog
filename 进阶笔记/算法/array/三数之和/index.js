function threeSum(arr, target) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < arr.length - 2; i++) { // 减去2的原因是两次循环，第二次从1开始，所以最外层药少循环一次
    const first = arr[i]; // 第一个数
    for (let j = i + 1; j < arr.length; j++) {
      // 假设arr[j]是第三个数，那目标值减去第一个和第三个，就可以得出第二个
      const secoend = target - arr[j] - first;
      if (map.has(secoend)) {
        res.push([secoend, first, arr[j]])
      }
      map.set(arr[j], j)
    }
    map.clear()
  }
  return res
}

const nums = [-1, 0, 1, 2, -1, -4]
const target = 0
console.log(threeSum3(nums, target))

function threeSum2 (arr, target) {
  let set = new Set();
  arr.sort((a, b) => (a - b)); // 先对数组进行排序
  let res = []
  for (let i = 0; i < arr.length - 2; i++) {
    while (arr[i] === arr[i - 1]) { // 去重
      i++
    }
    const first = arr[i]; // 第一个值
    for (let j = i + 1; j < arr.length; j++) {
      const seconed = target - first - arr[j]; // arr[j]假设是第三个
      if (set.has(seconed)) {
        res.push([first, seconed, arr[j]])
        while (arr[j] === arr[j - 1]) { // 去重
          j++
        }
      }
      set.add(arr[j])
    }
    set = new Set() // 重置存储器
  }
  return res
}


function threeSum3 (arr, target) {
  if (arr.length < 3) { // 少于3个，不比较
    return [];
  }
  let res = [], seconed, last;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) { // 排序之后, i比target大，直接退出
      break;
    }

    // 去重
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue
    }

    seconed = i + 1 // 指针1，指向第二个数
    last = arr.length - 1 // 指针2，指向第三个数
    // 指针移动
    while (seconed < last) {
      // 求和
      const sum = arr[i] + arr[seconed] + arr[last]
      if (sum === target) { // 符合条件
        res.push([arr[i], arr[seconed], arr[last]])
        // 再度去重
        while (seconed < last && arr[seconed] === arr[seconed + 1]) {
          seconed++
        }
        while (seconed < last && arr[last] === arr[last - 1]) {
          last--
        }
        // 移动指针
        seconed++
        last--
      } else if (sum < target) { // 三个数加起来比目标值小，证明第一个数比较小，左边的指针往右移动
        seconed++
      } else if (sum > target) { // 三个数加起来比目标值大，证明最后一个比较大，右边的指针往左移动
        last--
      }
    }
    
  }
  return res
}