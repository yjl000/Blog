// const blog = require("../model/blog")
const _ = require('lodash');
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogList) => {
  let likeSum = 0
  if (blogList.length <= 0) {
    return 0
  }
  for (let i = 0; i < blogList.length; i++) {
    likeSum += blogList[i].likes
  }

  return likeSum
}

const favoriteBlog = (blogLists) => {
  let max = 0, index = 0;
  for (let i = 0; i < blogLists.length; i++) {
    if (max < blogLists[i].likes) {
      max = blogLists[i].likes
      index = i
    }
  }
  
  return max > 0 ? {
    title: blogLists[index].title,
    author: blogLists[index].author,
    likes: blogLists[index].likes
  } : 'null'
}


const mostBlogs = (blogList) => {
  if (blogList.length <= 0) {
    return 'blog list of length is zero'
  }
  const res = _(_.map(blogList, (blog) => blog.author))
    .countBy()
    .entries()
    .maxBy();
  
  return {
    author: res[0],
    blogs: res[1]
  }
}

const mostLikes = (blogList) => {
  if (blogList.length <= 0) {
    return 'blog list of length is zero'
  }
  const res = _(_.groupBy(blogList, 'author'))
  .values()
  .map((item) => {
    return {
      author: item[0].author,
      likes: _.sumBy(item, (list) => list.likes)
    } 
  })
  .maxBy('likes');
  
  return {
    author: res.author,
    likes: res.likes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
