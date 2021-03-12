const favoriteBlog = require('../utils/list_helper').favoriteBlog

describe('favorite blog', () => {
  const listWithBiggerBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful one',
      author: 'jing',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'Go To Statement Considered Harmful two',
      author: 'yang',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful three',
      author: 'ken',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
  ]

  const result = {
    title: 'Go To Statement Considered Harmful two',
    author: 'yang',
    likes: 7
  }

  test('of a bigger favorite blog is calculated right', () => {
    expect(favoriteBlog(listWithBiggerBlog)).toEqual(result)
  })
})