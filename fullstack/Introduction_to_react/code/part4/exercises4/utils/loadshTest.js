const _ = require('lodash');

let arr = [{
    "_id": "5a422a851b54a676234d17f7",
    "title": "React patterns",
    "author": "Michael Chan",
    "url": "https://reactpatterns.com/",
    "likes": 7,
    "__v": 0
  },
  {
    "_id": "5a422aa71b54a676234d17f8",
    "title": "Go To Statement Considered Harmful",
    "author": "Edsger W. Dijkstra",
    "url": "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    "likes": 5,
    "__v": 0
  },
  {
    "_id": "5a422b3a1b54a676234d17f9",
    "title": "Canonical string reduction",
    "author": "Edsger W. Dijkstra",
    "url": "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    "likes": 12,
    "__v": 0
  },
  {
    "_id": "5a422b891b54a676234d17fa",
    "title": "First class tests",
    "author": "Robert C. Martin",
    "url": "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    "likes": 10,
    "__v": 0
  },
  {
    "_id": "5a422ba71b54a676234d17fb",
    "title": "TDD harms architecture",
    "author": "Robert C. Martin",
    "url": "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    "likes": 0,
    "__v": 0
  },
  {
    "_id": "5a422bc61b54a676234d17fc",
    "title": "Type wars",
    "author": "Robert C. Martin",
    "url": "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    "likes": 2,
    "__v": 0
  }
]

/*
let maparr = _.map(arr, (blog) =>  blog.author)
console.log('map:', maparr) // ['Michael Chan','Edsger W. Dijkstra','Edsger W. Dijkstra','Robert C. Martin','Robert C. Martin','Robert C. Martin']
let countByArr = _.countBy(maparr)
console.log('countBy', countByArr) // { 'Michael Chan': 1, 'Edsger W. Dijkstra': 2, 'Robert C. Martin': 3 }
let entriesArr = _.entries(countByArr)
console.log('entries', entriesArr) // [[ 'Michael Chan', 1 ],[ 'Edsger W. Dijkstra', 2 ],[ 'Robert C. Martin', 3 ]]
let maxByArr = _.maxBy(entriesArr)
console.log('maxBy', maxByArr) // [ 'Robert C. Martin', 3 ]


var result = _(_.map(arr, (blog) =>  blog.author))
  .countBy()
  .entries()
  .maxBy();

// console.log(result, '*****8');
*/

let groupbyArr = _.groupBy(arr, 'author')
// console.log('groupbyArr', groupbyArr)
/*
{
  'Michael Chan': [
    {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    }
  ],
  'Edsger W. Dijkstra': [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0
    }
  ],
  'Robert C. Martin': [
    {
      _id: '5a422b891b54a676234d17fa',
      title: 'First class tests',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422ba71b54a676234d17fb',
      title: 'TDD harms architecture',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
      likes: 0,
      __v: 0
    },
    {
      _id: '5a422bc61b54a676234d17fc',
      title: 'Type wars',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
      likes: 2,
      __v: 0
    }
  ]
}
*/
let valueArr = _.values(groupbyArr)
// console.log('valueArr', valueArr)

/*
[
  'Michael Chan': [
    {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    }
  ],
  'Edsger W. Dijkstra': [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0
    }
  ],
  'Robert C. Martin': [
    {
      _id: '5a422b891b54a676234d17fa',
      title: 'First class tests',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422ba71b54a676234d17fb',
      title: 'TDD harms architecture',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
      likes: 0,
      __v: 0
    },
    {
      _id: '5a422bc61b54a676234d17fc',
      title: 'Type wars',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
      likes: 2,
      __v: 0
    }
  ]
]
*/

let mapArr = _.map(valueArr, (item) => {
  return {
    author: item[0].author,
    likes: _.sumBy(item, (list) => list.likes)
  } 
})

// console.log('mapArr: ',mapArr)
/*
[
  { author: 'Michael Chan', likes: 7 },
  { author: 'Edsger W. Dijkstra', likes: 17 },
  { author: 'Robert C. Martin', likes: 12 }
]
*/

let maxByArr = _.maxBy(mapArr, 'likes')
// console.log(maxByArr) // { author: 'Edsger W. Dijkstra', likes: 17 }

var result = _(_.groupBy(arr, 'author'))
  .values()
  .map((item) => {
    return {
      author: item[0].author,
      likes: _.sumBy(item, (list) => list.likes)
    } 
  })
  .maxBy('likes');

  console.log('result', result)
