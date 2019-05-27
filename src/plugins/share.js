export default (data, event) => {
  event && event.preventDefault()
  navigator.share({
    title: data.title,
    text: data.title,
    url: data.url
  })
}
