数组扁平化，比较新的浏览器可以用Array.prototype.flat来实现，这里主要是实现一个flat方法；
思路1：采用递归和reduce实现
思路2: 用栈一次铺平所有

数组去重
1、比较新的数组方法是 Set: Array.from(new Set(arr))
2、reduce去重
3、filter去重