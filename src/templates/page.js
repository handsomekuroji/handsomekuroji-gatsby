import React from 'react'
import AdSense from 'react-adsense'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { font, media } from '../components/variable/mixin'

import lozad from '../plugins/lozad'
import social from '../plugins/social'
import youtube from '../plugins/youtube'
import Replace from '../plugins/replace'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import PageHeader from '../components/organisms/pageHeader'
import PostFooter from '../components/organisms/postFooter'

import PlayIcon from '../images/main/play.svg'

const PostMain = styled.main`
  background: var(--c_4);
  box-shadow: rgba(19, 27, 54, 0.1) 0 1px 6px;
  border-radius: 8px;
  margin: 32px auto 0;
  max-width: 620px;
  overflow: hidden;
  transition: 0.3s;
  width: calc(100% - 16px);
  ${media.xs`
    width: calc(100% - 32px);
  `}
  ${media.s`
    width: calc(100% - 48px);
  `}
  ${media.ms`
    max-width: 690px;
    width: calc(100% - 64px);
  `}
  ${media.ls`
    margin: 48px auto 0;
  `}
`

const PostContent = styled.div`
  counter-reset: section;
  font-size: 0.95rem;
  line-height: 1.8;
  padding: 0 0 32px;
  transition: 0.3s;
  ${media.m`
    font-size: 1rem;
    padding: 0 0 48px;
  `}
  section {
    margin: 16px 0 0;
    overflow: hidden;
    padding: 0 16px;
    ${media.s`
      margin: 32px 0 0;
      padding: 0 24px;
    `}
    ${media.ms`
      margin: 48px 0 0;
      padding: 0 32px;
    `}
    ${media.m`
      padding: 0 64px;
    `}
    &:first-of-type {
      margin: 0;
    }
    &::before {
      border-top: 1px solid var(--c_8);
      content: '';
      display: block;
      margin: 0 -24px;
      padding: 0 0 16px;
      ${media.s`
        padding: 0 0 32px;
      `}
      ${media.ms`
        margin: 0 -32px;
      `}
      ${media.m`
        margin: 0 -64px;
        padding: 0 0 48px;
      `}
    }
  }
  h2 {
    color: var(--c_1);
    font: bold 1.3rem / 1.5 ${font.$f_1};
    letter-spacing: 0.1rem;
    position: relative;
    z-index: 1;
    ${media.l`
      font-size: 1.5rem;
    `}
    &::before {
      color: var(--c_8);
      counter-increment: section;
      content: counter(section, decimal-leading-zero);
      font: italic bold 7rem / 1.1 'Georgia', serif;
      left: -32px;
      position: absolute;
      text-indent: 0.1rem;
      top: -60px;
      white-space: pre;
      z-index: -1;
      ${media.s`
        top: -80px;
      `}
      ${media.m`
        font-size: 10rem
        left: -80px;
        top: -112px;
      `}
      ${media.l`
        font-size: 12rem
        top: -128px;
      `}
    }
  }
  p {
    letter-spacing: 0.05rem;
    margin: 24px 0 0;
    overflow: hidden;
    &:first-of-type {
      position: relative;
      z-index: 1;
    }
  }
  ul {
    list-style: disc;
    margin: 24px 0 0;
    padding: 0 0 0 20px;
  }
  figure {
    border-radius: 12px;
    margin: 32px 0;
    overflow: hidden;
    &:last-child {
      margin: 32px 0 0;
    }
  }
  figcaption {
    background: var(--c_8);
    box-sizing: border-box;
    color: var(--c_3);
    font-size: 0.8rem;
    font-weight: bold;
    overflow: hidden;
    padding: 8px 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
  img {
    background: var(--c_2);
    height: auto;
    vertical-align: bottom;
    width: 100%;
    &.fade {
      background: 0;
    }
    .dark & {
      filter: brightness(80%);
    }
  }

  blockquote {
    background: var(--c_8);
    padding: 16px 32px 24px;
    position: relative;
    margin: 0 -32px;
    ${media.m`
      margin: 0;
    `}
    &[data-title] {
      margin: 0;
      padding: 16px;
      z-index: 1;
      ${media.ms`
        padding: 24px 32px;
      `}
      &::before {
        color: var(--c_4);
        content: attr(data-title);
        font: italic bold 4rem / 1.1 'Georgia', serif;
        left: -8px;
        position: absolute;
        text-indent: 0.1rem;
        top: -16px;
        -webkit-text-stroke: 0;
        white-space: pre;
        z-index: -1;
        ${media.m`
          font-size: 5rem
          left: -16px;
          top: -24px;
        `}
      }
    }

    p {
      font-size: 0.9rem;
      &:first-of-type {
        margin: 0;
        &:first-letter {
          font-size: 2.2rem;
          font-weight: bold;
          float: left;
          line-height: 1.4;
          letter-spacing: 0.2em;
        }
      }
    }
  }
  hr {
    border: 0;
    border-top: 1px solid var(--c_8);
    margin: 16px -16px;
    ${media.s`
      margin: 32px -24px;
    `}
    ${media.ms`
      margin: 48px -32px;
    `}
    ${media.m`
      margin: 48px -64px;
    `}
  }

  .twitter-tweet {
    display: grid !important;
    justify-content: center;
    margin: 32px auto 0 !important;
    width: 100% !important;
  }

  .instagram-media {
    box-sizing: border-box;
    margin: 32px auto 0 !important;
    min-width: unset !important;
  }

  .link {
    background: var(--c_8);
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    margin: 24px 0 0;
    padding: 16px;
    text-decoration: none;
    ${media.ms`
      font-size: 0.95rem;
      padding: 16px 20px;
    `}
    p {
      display: flex;
      line-height: 1.5;
      margin: 0;
      &::before {
        content: '👉';
      }
    }
    a {
      margin: 0 0 0 4px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      &:visited {
        color: var(--c_5);
      }
    }
  }

  .youtube {
    background: var(--c_0);
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      display: block;
      padding: 56.25% 0 0;
    }
    iframe {
      border: 0;
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  .youtube__img {
    object-fit: cover;
    height: 100%;
    position: absolute;
    top: 0;
    transition: 0.2s ease;
    width: 100%;
  }

  .youtube__button {
    bottom: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    &::before {
      align-items: center;
      background: url(${PlayIcon}) 50% / 16px 16px rgba(19, 27, 54, 0.8) no-repeat;
      border-radius: 50%;
      bottom: 0;
      content: '';
      display: flex;
      height: 48px;
      justify-content: center;
      left: 0;
      margin: auto;
      opacity: 0.6;
      right: 0;
      transition: 0.2s ease;
      width: 48px;
    }
    &:hover::before {
      background-color: rgba(19, 27, 54, 0.8);
      opacity: 0.8;
    }
  }

  .youtube__icon {
    height: 16px;
    width: 16px;
  }

  .storyline {
    border-radius: 12px;
    margin: 32px 0;
    overflow: hidden;
    position: relative;
    [data-youtube] {
      border-radius: 12px 12px 0 0;
      margin: 0;
      z-index: 2;
    }
    ${media.m`
      [data-youtube] {
        margin: 0;
      }
    `}
  }

  .item {
    background: var(--c_8);
    border-radius: 12px;
    display: grid;
    grid-gap: 16px;
    margin: 24px 0 0;
    padding: 32px 16px;
    ${media.ls`
      grid-auto-flow: column;
      grid-gap: 32px;
      padding: 32px;
    `}
  }

  .item__figure {
    margin: 0 auto;
    position: relative;
    width: 160px;
    &::before {
      backface-visibility: hidden;
      background: rgba(19, 27, 54, 0.8);
      border-radius: 24px;
      bottom: 0;
      content: '';
      display: block;
      filter: blur(8px);
      height: 16px;
      left: 0;
      margin: auto;
      min-width: 80px;
      position: absolute;
      right: 0;
      width: calc(100% - 48px);
    }
    ${media.ls`
      margin: 0 0 0 auto;
    `}
  }

  .item__img {
    border-radius: 6px;
    height: auto;
    position: relative;
    width: 100%;
  }

  .item__name {
    font-weight: bold;
    text-align: center;
    ${media.ls`
      text-align: left;
    `}
  }

  .item__title {
    display: inline-block;
    font: bold 1rem / 1.6 ${font.$f_1};
    margin: 0 8px 0 0;
    ${media.m`
      font-size: 1rem;
    `}
    ${media.ls`
      font-size: 1.2rem;
    `}
    &:last-of-type {
      margin: 0;
    }
  }

  .item__button {
    display: grid;
    grid-gap: 8px;
    justify-content: center;
    margin: 16px 0 0;
    ${media.s`
      grid-auto-flow: column;
    `}
    ${media.ms`
      grid-gap: 16px;
    `}
    ${media.ls`
      grid-gap: 8px;
      justify-content: flex-start;
    `}
  }

  .item__a {
    align-items: center;
    background: var(--c_4);
    border-radius: 4px;
    box-sizing: border-box;
    color: var(--c_0);
    display: flex;
    font: italic bold 0.95rem / 1 ${font.$f_1};
    justify-content: center;
    padding: 10px 12px 11px;
    position: relative;
    text-decoration: none;
    width: 160px;
    z-index: 1;
    ${media.s`
      width: 96px;
    `}
    ${media.sm`
      width: 112px;
    `}
    ${media.ms`
      width: 120px;
    `}
    ${media.m`
      font-size: 1rem;
    `}
    ${media.ls`
      width: 96px;
    `}
    &:hover {
      background: var(--c_2);
      color: var(--c_0);
    }
    &:visited {
      color: var(--c_0);
      &:hover {
        color: var(--c_0);
      }
    }
  }

  .iframe {
    position: relative;
    &::before {
      content: '';
      display: block;
      padding: 56.25% 0 0;
    }
  }

  .iframe__data {
    border: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const AdSenseContainer = styled.div`
  margin: 32px auto 0;
  max-width: 620px;
  width: 100%;
  ${media.m`
    margin: 48px auto 0;
    max-width: 690px;
    width: calc(100% - 128px);
  `}
`

export default function postTemplate({ data }) {
  const post = data.contentfulPage
  const html = Replace(post.content.childMarkdownRemark.html)
  const content = React.useRef()

  const metaData = {
    img: post.thumbnail.file.url,
    title: post.title,
    url: post.slug
  }

  const headerData = {
    src: post.thumbnail.file.url,
    title: post.title,
    desc: Replace(post.description.childMarkdownRemark.html)
  }

  const footerData = {
    title: post.title,
    url: post.slug
  }

  React.useEffect(() => {
    lozad()
    youtube(content.current)
    social('https://platform.twitter.com/widgets.js', 'twitter-tweet', content.current)
  }, [content])

  return (
    <Layout>
      <SEO meta={metaData} />
      <Header />
      <PostMain>
        <article>
          <PageHeader headerData={headerData} />
          <PostContent
            ref={content}
            dangerouslySetInnerHTML={{
              __html: html
            }}
          />
          <section className="contactForm">
            <form
              className="contactForm__container"
              name="contact"
              action="/thanks"
              netlify-honeypot="bot-field"
              data-netlify="true"
              method="post"
            >
              <input type="hidden" name="form-name" value="contact" aria-label="hidden" />
              <div className="contactForm__block--hidden">
                <label id="dont" htmlFor="bot">
                  Don’t fill this out
                </label>
                <input id="bot" className="contactForm__input" type="text" name="bot-field" aria-labelby="dont" />
              </div>
              <div className="contactForm__block">
                <label id="nameLabel" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  className="contactForm__input contactForm__validation"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required="required"
                  aria-labelby="nameLabel"
                />
              </div>
              <div className="contactForm__block">
                <label id="emailLabel" className="contactForm__label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="contactForm__input contactForm__validation"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required="required"
                  aria-labelby="emailLabel"
                />
              </div>
              <div className="contactForm__block">
                <label id="titleLabel" className="contactForm__label" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  className="contactForm__input contactForm__validation"
                  type="text"
                  name="title"
                  required="required"
                  aria-labelby="titleLabel"
                />
              </div>
              <div className="contactForm__block">
                <label id="messageLabel" className="contactForm__label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="contactForm__textarea contactForm__validation"
                  name="message"
                  required="required"
                  aria-labelby="messageLabel"
                />
              </div>
              <button className="contactForm__button" aria-label="フォームの内容を送信" type="submit">
                SEND
              </button>
            </form>
          </section>
          <PostFooter footerData={footerData} />
        </article>
      </PostMain>
      <AdSenseContainer>
        <AdSense.Google
          client="ca-pub-3005738200116146"
          slot="2919591828"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </AdSenseContainer>
      <Footer alltags={data.allContentfulTag.edges} />
    </Layout>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      slug
      title
      createdAt
      description {
        description
        childMarkdownRemark {
          html
        }
      }
      thumbnail {
        file {
          url
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulTag {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`