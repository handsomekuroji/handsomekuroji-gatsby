export default (src, name, refs) => {
  const target = refs.getElementsByClassName(name)[0]

  if (target) {
    const id = document.getElementById(name)

    const script = () => {
      let time = 1

      window.addEventListener('scroll', () => {
        if (time === 1) {
          const script = document.createElement('script')
          script.src = src
          script.setAttribute('async', 'async')
          script.setAttribute('id', name)
          document.body.appendChild(script)
          time = 0
        }
      })
    }

    const remove = () => {
      id.parentNode.removeChild(id)
      script()
    }

    id ? remove() : script()
  }
}
