export default data => {
  const title = data.title
  const text = title
  const url = data.url

  navigator.share({
    title,
    text,
    url
  })
}
