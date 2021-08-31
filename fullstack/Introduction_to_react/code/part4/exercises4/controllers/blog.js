const blogsRouter = require('express').Router()
const Blog = require('../model/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

// 通过id寻找blog
blogsRouter.get('/:id', async (request, response, next) => {
  const blog = await Blog.findById(request.params.id)
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})

// 删除blog
blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})


blogsRouter.post('/', async (request, response, next) => {
  if (request.body.title === undefined) {
    return response.status(400).json({ error: 'title missing' })
  }
  if (request.body.likes === undefined) {
    request.body.likes = 0
  }
  const blog = new Blog(request.body)
  const result = await blog.save()
  response.status(201).json(result)
  
})

// 更新blog
blogsRouter.put('/:id', async (request, response) => {
  // 先获取原值
  let oldBlog = await Blog.findById(request.params.id)
  oldBlog = oldBlog.toJSON()
  if (!oldBlog) {
    response.status(404).end()
  } else {
    const body = request.body
    const newBlog = {
      title: body.title || oldBlog.title,
      author: body.author || oldBlog.author,
      url: body.url || oldBlog.url,
      likes: body.likes || oldBlog.likes
    }
    const result = await Blog.findByIdAndUpdate(request.params.id, newBlog, {new: true})
    response.status(200).json(result)
  }

})

module.exports = blogsRouter