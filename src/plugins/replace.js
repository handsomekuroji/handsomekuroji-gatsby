import dummy from '../images/main/dummy.svg'

export default replaceTarget => {
  const replaceImage = /<p><img src="([^>]*?)" alt="([^>]*?)" width="([^>]*?)" height="([^>]*?)"><\/p>/gi
  const replaceYoutube = /<p><span data-youtube="([^>]*?)">youtube<\/span><\/p>/gi
  return replaceTarget
    .replace(/\s+/g, ' ')
    .replace(replaceImage, (match, img, alt, width, height) => {
      return `
        <figure>
          <picture>
            <source type="image/webp" data-srcset="${img}?fm=webp&w=640 640w, ${img}?fm=webp 1280w" data-sizes="100w" />
            <img src="${dummy}" content="${img}" data-src="${img}" data-srcset="${img}?w=640 640w, ${img} 1280w" alt="${alt}" width="${width}" height="${height}" class="img">
          </picture>
        </figure>
      `
    })
    .replace(replaceYoutube, (match, id) => {
      return `
        <figure class="youtube" data-youtube="${id}">
          <div id="${id}">
            <img class="youtube__img" src="https://i.ytimg.com/vi/${id}/mqdefault.jpg" data-src="https://i.ytimg.com/vi/${id}/sddefault.jpg" width="640" height="480" alt="${id}">
            <button type="button" class="youtube__button" aria-label="再生" aria-pressed="false"></button>
          </div>
        </figure>
      `
    })
}
