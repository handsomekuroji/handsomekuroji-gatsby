export default (url, event) => {
  const w = (screen.width - 600) / 2
  const h = (screen.height - 500) / 2
  if (event) event.preventDefault()
  window.open(
    url,
    'SNS_window',
    'width=600, height=500, menubar=no, toolbar=no, scrollbars=yes, left=' + w + ', top=' + h
  )
}
