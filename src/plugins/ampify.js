export default target => {
  const image = /<p><img src="([^>]*?)" alt="([^>]*?)" width="([^>]*?)" height="([^>]*?)"><\/p>/gi
  const youtube = /<p><span data-youtube="([^>]*?)">youtube<\/span><\/p>/gi
  const story = /<p><span data-youtube="([^>]*?)">([\s\S^>]*?)<\/span><\/p>/gi
  const iframe = /<p><a href="([^>]*?)" target="_blank" rel="noopener noreferrer">iframe<\/a><\/p>/gi
  const twitter = /<blockquote class="twitter-tweet"[^>]*?>[^>]*?<a href="https:\/\/twitter\.com\/[^>]*?\/status\/([^>]*?)\?[^>]*?"[^>]*?<\/blockquote>/gi
  const amazon = /<p><span data-amazon="([^>]*?)">([^>]*?)<\/span><\/p>/gi
  const amazonImage = /<p><span data-amazon="([^>]*?)" data-amaimg="([^>]*?)">([^>]*?)<\/span><\/p>/gi

  return target
    .replace(/\s+/g, ' ')
    .replace(image, (match, img, alt, width, height) => {
      return `
        <figure>
          <amp-img
            src="https:${img}?fm=webp"
            srcset="https:${img}?fm=webp&w=320 640w, https:${img}?fm=webp&w=640 760w, https:${img}?fm=webp&w=1280 1280w"
            width="${width}"
            height="${height}"
            alt="${alt}"
            layout="responsive"
          >
            <amp-img
              src="https:${img}"
              srcset="https:${img}?w=320 640w, https:${img}?w=640 760w, https:${img}?w=1280 1280w"
              width="${width}"
              height="${height}"
              alt="${alt}"
              fallback="fallback"
              layout="responsive"
            ></amp-img>
          </amp-img>
        </figure>
      `
    })
    .replace(youtube, (match, id) => {
      return `
        <figure class="youtube" data-youtube="${id}">
          <amp-youtube data-videoid="${id}" width="640" height="360" layout="responsive"></amp-youtube>
        </figure>
      `
    })
    .replace(story, (match, id, text) => {
      return `
        <div class="storyline">
          <figure class="youtube" data-youtube="${id}">
            <amp-youtube data-videoid="${id}" width="640" height="360" layout="responsive"></amp-youtube>
          </figure>
          <blockquote data-title="STORYLINE"><p>${text}</p></blockquote>
        </div>
      `
    })
    .replace(iframe, (match, url) => {
      return `
        <figure class="iframe">
          <amp-iframe
            src="${url}"
            width="640"
            height="360"
            sandbox="allow-scripts allow-same-origin allow-popups"
            layout="responsive"
            allowfullscreen
          ></amp-iframe>
        </figure>
      `
    })
    .replace(twitter, (match, id) => {
      return `
        <amp-twitter width=592 height=472 layout="responsive" data-tweetid="${id}"></amp-twitter>
      `
    })
    .replace(amazonImage, (match, id, img, text) => {
      const title = text.replace(/( )/gi, '</span><span class="item__title">')
      return `
        <div class="item">
          <div class="item__figure">
            <amp-img
              src="https://images-fe.ssl-images-amazon.com/images/I/${img}.jpg"
              width="240"
              height="240"
              alt="${text}"
              layout="responsive"
            ></amp-img>
          </div>
          <div class="item__container">
            <div class="item__name">
              <span class="item__title">${title}</span>
            </div>
            <div class="item__button">
              <a href="https://www.amazon.co.jp/dp/${id}?SubscriptionId=AKIAJYRV5DJ2HM3AL57A&tag=handsomekuroji-22&linkCode=xm2&camp=2025&creative=165953&creativeASIN=${id}" rel="noopener nofollow" target="_blank" data-name="${text}" aria-label="Amazon" class="item__a item__a--amazon">Amazon</a>
              <a href="https://hb.afl.rakuten.co.jp/hgc/0f436b4a.0c3994ab.0f436b4b.28a7a2d2/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F${text}%2F-%2Ff.1-p.1-s.1-sf.0-st.A-v.2%3Fx%3D0%26scid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2F" rel="noopener nofollow" target="_blank" aria-label="Rakuten" class="item__a item__a--rakuten">Rakuten</a>
              <a href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2796530&pid=885366263&vc_url=http%3A%2F%2Fsearch.shopping.yahoo.co.jp%2Fsearch%3Fp%3D${text}" rel="noopener nofollow" target="_blank" aria-label="Yahoo" class="item__a item__a--yahoo">Yahoo!</a>
            </div>
          </div>
        </div>
      `
    })
    .replace(amazon, (match, id, text) => {
      const title = text.replace(/( )/gi, '</span><span class="item__title">')
      return `
        <div class="item">
          <div class="item__figure">
            <amp-img
              src="https://images-fe.ssl-images-amazon.com/images/P/${id}.jpg"
              width="240"
              height="240"
              alt="${text}"
              layout="responsive"
            ></amp-img>
          </div>
          <div class="item__container">
            <div class="item__name">
              <span class="item__title">${title}</span>
            </div>
            <div class="item__button">
              <a href="https://www.amazon.co.jp/dp/${id}?SubscriptionId=AKIAJYRV5DJ2HM3AL57A&tag=handsomekuroji-22&linkCode=xm2&camp=2025&creative=165953&creativeASIN=${id}" rel="noopener nofollow" target="_blank" data-name="${text}" aria-label="Amazon" class="item__a item__a--amazon">Amazon</a>
              <a href="https://hb.afl.rakuten.co.jp/hgc/0f436b4a.0c3994ab.0f436b4b.28a7a2d2/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F${text}%2F-%2Ff.1-p.1-s.1-sf.0-st.A-v.2%3Fx%3D0%26scid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2F" rel="noopener nofollow" target="_blank" aria-label="Rakuten" class="item__a item__a--rakuten">Rakuten</a>
              <a href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2796530&pid=885366263&vc_url=http%3A%2F%2Fsearch.shopping.yahoo.co.jp%2Fsearch%3Fp%3D${text}" rel="noopener nofollow" target="_blank" aria-label="Yahoo" class="item__a item__a--yahoo">Yahoo!</a>
            </div>
          </div>
        </div>
      `
    })
}
