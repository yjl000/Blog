function flat (arr, depth = 1) {
  return depth > 0 ? arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) { // 当前值cur是数组的情况下，就进行递归
      return [...acc, ...flat(cur, depth - 1)]
    }
    return [...acc, cur]
  }, []) : arr
}

const arr = [1,2,3, [4,5,[6]], [2,4,[7]], 8]
console.log(flatStack(arr, Infinity))

function flatStack (arr) {
  let result = [];
  // 将数组拷贝到栈
  let stack = [...arr];
  while (stack.length > 0) {
    // 出栈
    const last = stack.pop()
    if (Array.isArray(last)) { // 如果出来的值是一个数组，铺开一层继续入栈
      stack.push(...last)
    } else { // 如果不是数组，就反着放入结果数组中
      result.unshift(last) // 每次从前面插入到结果数组
    }
  }
  return result;
}

// reduce数组去重
function unique (arr) {
  return arr.sort().reduce((acc, cur) => {
    if (acc.length === 0 || acc[acc.length - 1] !== cur) {
      acc.push(cur)
    }
    return acc
  }, [])
}

// filter 去重
function uniqueFilter (arr) {
  return arr.filter((ele, index, self) => {
    return self.indexOf(ele) === index
  })
}

const arr1 = [1, 2, 2, 4]
console.log(uniqueFilter(arr1))