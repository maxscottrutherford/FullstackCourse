const dummy = (blogs) => {
  console.log('received blogs', blogs)
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce(function (acc, obj) { return acc + obj.likes; }, 0)
}

module.exports = {
  dummy,
  totalLikes
}