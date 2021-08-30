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
  let len1 = arr1.length - 1;
  let len2 = arr2.length - 1;
  let len = arr1.length + arr2.length - 1;
  // arr2.length > 0才需要合并
  while(len2 >= 0) {
    if (len1 < 0) { // 只有arr2有值的情况下，直接把arr2遍历到arr1
      arr1[len--] = arr2[len2--];
      continue;
    }
    arr1[len--] = arr1[len1] <= arr2[len2] ? arr2[len2--] : arr1[len1--]
    console.log(arr1)
  }
  console.log(arr1)
}
