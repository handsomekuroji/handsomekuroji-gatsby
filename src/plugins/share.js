export default data => {
  navigator
    .share({
      title: data.title,
      text: data.title,
      url: data.url
    })

    .then(() => {
      console.log('Successful share')
    })

    .catch(e => {
      console.log('Error sharing', e)
    })
}
