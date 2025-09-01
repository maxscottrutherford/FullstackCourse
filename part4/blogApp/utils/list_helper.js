const lodash = require('lodash')

const dummy = (blogs) => {
  console.log('received blogs', blogs)
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce(function (acc, obj) { return acc + obj.likes }, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.reduce((max, obj) => { return obj.likes > max.likes ? obj : max })
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null

  // count blogs by author
  const counts = lodash.countBy(blogs, 'author')

  //convert counts to array of { author, blogs } objects
  const authors = lodash.map(counts, (count, author) => ({
    author,
    blogs: count
  }))

  //return object with most blogs
  return lodash.maxBy(authors, 'blogs')
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}