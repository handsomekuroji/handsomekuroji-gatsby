export default data => {
  navigator.share({
    title: data.title,
    text: data.title,
    url: data.url
  })
}
