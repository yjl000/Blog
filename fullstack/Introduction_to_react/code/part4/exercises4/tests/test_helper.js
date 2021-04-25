const Blog = require('../model/blog')

const initialBlogs = [
    {
      title: 'title1',
      author: 'ken',
      url: 'www.baidu.com',
      likes: 5
    },
    {
      title: 'title2',
      author: 'yang',
      url: 'www.baidu.com',
      likes: 7
    }
]

const nonExistingId = async () => {
    const blog = new Blog({ title: 'willremovethissoon', date: new Date() })
    await blog.save()
    await blog.remove()

    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs,
    nonExistingId,
    blogsInDb
}