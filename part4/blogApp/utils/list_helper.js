const dummy = (blogs) => {
  console.log('received blogs', blogs)
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce(function (acc, obj) { return acc + obj.likes; }, 0)
}

const favoriteBlog = (blogs) => {
  const favBlog = blogs.reduce((max, obj) => {
    obj.likes > max.likes ? obj : max
  })

  return favBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}