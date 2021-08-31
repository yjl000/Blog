// test1
function merge1 (arr1, arr2) {
  let newArr =  [...arr1, ...arr2].sort();

  console.log(newArr)
}

const nums1 = [1,2,3]
const nums2 = [2,5,6]
// merge1(nums1, nums2)
merge2(nums1, nums2);

// test2
function merge2 (arr1, arr2) {
  // arr1的最后一个下标
  let len1 = arr1.length - 1;
  // arr2最后一个下标
  let len2 = arr2.length - 1;
  // 合并后数组的最长下标
  let len = arr1.length + arr2.length - 1;
  // arr2不小于0的情况下才继续合并
  while (len2 >= 0) {
    // 如果arr1小于0，直接将arr2合并到arr1
    if (len1 < 0) {
      arr1[len--] = arr2[len2--];
      continue;
    }
    // 将arr1最后一个和arr2最后一个对比大小
    arr1[len--] = arr1[len1] <= arr2[len2] ? arr2[len2--] : arr1[len1--];
  }
  console.log(arr1, 'new')
}