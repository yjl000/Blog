function List () {
  // 节点
  let Node = function (element) {
    this.element = element
    this.next = null
  }

  // 初始头节点为 null
  let head = null
  // 链表操作
  let length = 0

  // 操作
  // 获取链表
  this.getList = function() {
    return head
  }
  // 插入节点
  this.append = function(element) {
    let node = new Node(element), p = head
    if (!head) { // 当链表为null，直接将node插入
      head = node
      return
    }
    while (p.next) { // 遍历到链尾
      p = p.next
    }
    p.next = node // 链尾插入节点
    length++
    console.log(length, head)
  }
}

let list = new List()
for (let i = 0; i < 3; i++) {
  list.append(i)
}
console.log(list.getList())