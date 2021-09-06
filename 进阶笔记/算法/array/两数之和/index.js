function sum (arr, target) {
  let map = new Map(); // 新建map结构存储
  for (let index = 0; index < arr.length; index++) {
    let result = target - arr[index]; // 计算差值
    if (map.has(result)) { // 判断是否有在map里
      return [map.get(result), index]
    }
    map.set(arr[index], index); // 没有的情况下，把当前值存入
    console.log(map)
  }
  return [];
}

const arr = [2, 20, 7, 11, 13]
const target = 9
console.log(sum(arr, target))
