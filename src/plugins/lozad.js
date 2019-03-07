const lozad = process.browser ? require('lozad') : null

export default () => {
  lozad('[data-src]', {
    loaded(el) {
      el.classList.add('fade')
    }
  }).observe()
}
