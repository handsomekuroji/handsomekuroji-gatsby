export default (url, event) => {
  const width = (window.screen.width - 600) / 2
  const height = (window.screen.height - 500) / 2

  event && event.preventDefault()
  window.open(
    url,
    'SNS_window',
    `width=600, height=500, menubar=no, toolbar=no, scrollbars=yes, left=${width}, top=${height}`
  )
}
