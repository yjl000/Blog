function jiaoji (arr1, arr2) {
  return Array.from(new Set(arr1.filter((ele) => {
    return arr2.includes(ele)
  })))
}

function intersection (...args) {
  return [...new Set(args.reduce((acc, cur) => {
    return acc.filter((item) => {
      return cur.includes(item)
    })
  }))]
}

const arr1 = [1, 2, 3, 4]
const arr2 = [7, 2, 4, 9]
const arr3 = [5, 6, 4]
console.log(intersection(arr1, arr2, arr3))