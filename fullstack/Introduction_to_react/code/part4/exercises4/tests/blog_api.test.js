const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const Blog = require('../model/blog')

beforeEach(async () => {
  // 每次测试开始之前，删除数据库内容，使用初始化数据，确保，每次测试之前数据一致
  await Blog.deleteMany({})
  // let blogObject = new Blog(helper.initialBlogs[0])
  // await blogObject.save()
  // blogObject = new Blog(helper.initialBlogs[1])
  // await blogObject.save()
  const blogObject = helper.initialBlogs.map(blog => new Blog(blog))
  const promiseArray = blogObject.map(blog => blog.save())
  await Promise.all(promiseArray)

})

// 验证blogs数量
test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

// 验证是否包含某个用户
test('a specific blog is within the returned notes', async () => {
  const response = await api.get('/api/blogs')
  const authors = response.body.map(r => r.author)
  expect(authors).toContain(
    'ken'
  )
})

// 验证添加新的blog
test('a valid blog can be added', async () => {
  const newBlog = {
      title: 'title3',
      author: 'kenyang',
      url: 'www.baidu.com',
      likes: 110
  }
  // 添加新blog
  await api
  .post('/api/blogs')
  .send(newBlog)
  .expect(201)
  .expect('Content-Type', /application\/json/)

  // 获取所有blog
  // const response = await api.get('/api/blogs')
  const blogsAtEnd = await helper.blogsInDb()
  const titles = blogsAtEnd.map(r => r.title)
  // 验证长度是否加上
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  // 验证新加上的blog的title是否正确
  expect(titles).toContain(
    'title3'
  )
})

// 验证没有title的blog能否被添加
test('blog without title is not added', async () => {
  const newBlog = {
    author: 'yjl',
    url: 'www.baidu.com'
  }

  await api
  .post('/api/blogs')
  .send(newBlog)
  .expect(400)

  // const response = await api.get('/api/blogs')
  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
})

// 测试查找单个blog
test('a specific blog can be viewed', async () => {
  const blogsAtStart = await helper.blogsInDb()

  const blogToView = blogsAtStart[0]

  const resultBlog = await api
    .get(`/api/blogs/${blogToView.id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const processedBlogToView = JSON.parse(JSON.stringify(blogToView))
  expect(resultBlog.body).toEqual(processedBlogToView)
})
// 删除某个blog
test('a blog can be delete', async () => {
  const blogsAtStart = await helper.blogsInDb()
  const blogToDelete = blogsAtStart[0]

  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .expect(204)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(
    helper.initialBlogs.length - 1
  )

  const titles = blogsAtEnd.map(t => t.title)
  
  expect(titles).not.toContain(blogToDelete.title)
})

// 测试blog唯一属性命名
test('is id for flag', async () => {
  const blogsAtStart = await helper.blogsInDb()
  const blogToFlag = blogsAtStart[0]
  expect(blogToFlag.id).toBeDefined()
})

// 测试如果请求中缺少like 属性，它将默认为值0
test('if not like, it is value for zero', async () => {
  const newBlog = {
    title: 'title5',
    author: 'yjltxy',
    url: 'www.baidu.com'
  }
  // 添加新blog
  await api
  .post('/api/blogs')
  .send(newBlog)
  .expect(201)
  .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  const likes = blogsAtEnd.map(r => r.likes)
  const zero = likes[helper.initialBlogs.length]
  // 验证长度是否加上
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  // 验证新加上的blog的title是否正确
  expect(zero).toEqual(
    0
  )

})

// 测试更新likes
test('update blog likes', async () => {
    
})

afterAll(() => {
  mongoose.connection.close()
})