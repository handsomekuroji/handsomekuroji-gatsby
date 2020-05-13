const lozad = process.browser ? require('lozad') : null

export default () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('[data-src]')

    images.forEach((img) => {
      img.src = img.dataset.src
    })
  } else {
    lozad('[data-src]', {
      loaded(el) {
        el.classList.add('fade')
      },
    }).observe()
  }
}
