function threeSum(arr, target) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < arr.length - 2; i++) { // 减去2的原因是三个数之和，会拿掉前面两个
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
console.log(threeSum2(nums, target))

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
    set = new Set()
  }
  return res
}
