export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createAt: string;
  columnId: number;
}

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏，有一段非常有意思的简介',
    avatar: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏，有一段非常有意思的简介',
    avatar: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test1的专栏，有一段非常有意思的简介',
    avatar: ''
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test2的专栏，有一段非常有意思的简介',
    avatar: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png'
  }
]

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: 'this is my first test',
    content: 'this is a new post you often will need to map',
    image: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
    createAt: '2020-06-11 10:10:10',
    columnId: 1
  },
  {
    id: 4,
    title: 'this is my second test',
    content: 'this is a new post you often will need to map',
    image: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
    createAt: '2020-06-11 10:10:10',
    columnId: 2
  },
  {
    id: 5,
    title: 'this is my second-test list',
    content: 'this is a new post you often will need to map',
    image: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
    createAt: '2020-06-11 10:10:10',
    columnId: 2
  },
  {
    id: 3,
    title: 'this is my three test',
    content: 'this is a new post you often will need to map',
    image: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
    createAt: '2020-06-11 10:10:10',
    columnId: 3
  },
  {
    id: 2,
    title: 'this is my four test',
    content: 'this is a new post you often will need to map',
    image: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
    createAt: '2020-06-11 10:10:10',
    columnId: 4
  }
]
