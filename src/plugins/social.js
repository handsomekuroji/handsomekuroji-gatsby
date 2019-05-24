export default (scriptSrc, scriptName, scriptRefs) => {
  const scriptTarget = scriptRefs.getElementsByClassName(scriptName)[0]

  if (scriptTarget) {
    const scriptId = document.getElementById(scriptName)

    const addScript = () => {
      let scrollFirstTime = 1
      window.addEventListener('scroll', () => {
        if (scrollFirstTime === 1) {
          const addScript = document.createElement('script')
          addScript.src = scriptSrc
          addScript.setAttribute('async', 'async')
          addScript.setAttribute('id', scriptName)
          document.body.appendChild(addScript)
          scrollFirstTime = 0
        }
      })
    }

    const removeScript = () => {
      scriptId.parentNode.removeChild(scriptId)
      addScript()
    }

    scriptId ? removeScript() : addScript()
  }
}
