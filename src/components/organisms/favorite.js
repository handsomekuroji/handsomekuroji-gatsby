import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, media } from '~src/components/variable/mixin'
import Image from '~src/components/molecules/image'
import Prime from '~src/images/icon/prime.svg'
import Arrow from '~src/images/icon/arrow.svg'

const Wrapper = styled.section`
  background: var(--c_4);
  border-radius: 8px;
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  margin: 16px 0 0;

  ${media.s} {
    margin: 24px 0 0;
    padding: 0;
  }
`

const Links = styled.a`
  align-items: center;
  border-radius: 8px 8px 0 0;
  box-sizing: border-box;
  color: var(--c_1);
  display: grid;
  gap: 16px;
  grid-template-columns: 80px 1fr auto;
  padding: 16px;
  position: relative;
  text-decoration: none;
  width: 100%;

  ${media.s} {
    grid-template-columns: 120px 1fr auto;
    padding: 16px 24px;
  }

  ${media.sm} {
    grid-template-columns: 140px 1fr auto;
    padding: 24px;
  }

  ${media.ms} {
    grid-template-columns: 160px 1fr auto;
  }
`

const Icon = styled(Prime)`
  width: 100%;

  .dark & {
    .prime {
      fill: var(--c_1);
    }
  }
`

const Text = styled.span`
  color: var(--c_7);
  font: 0.8rem / normal ${font.$f_0};
  margin: 0 0 0 auto;
  text-align: left;

  ${media.xs} {
    font-size: 0.88rem;
  }

  ${media.s} {
    font-size: 1rem;
  }
`

const Right = styled(Arrow)`
  height: auto;
  stroke: var(--c_7);
  transition: transform 0.2s ease;
  width: 16px;

  ${media.s} {
    width: 24px;
  }

  ${media.sm} {
    margin: 0 0 0 8px;
  }

  ${Links}:hover & {
    @media (hover: hover) {
      transform: translateX(8px);
    }
  }

  ${Links}:focus & {
    transform: translateX(8px);
  }
`

const Ordered = styled.ol`
  backface-visibility: hidden;
  border-top: 1px solid var(--c_8);
  display: flex;
  overflow: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  visibility: visible;
  white-space: nowrap;
  will-change: transform;

  ${media.s} {
    padding: 16px 0;
  }

  ${media.sm} {
    padding: 20px 0 24px;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    height: 100%;

    ${media.s} {
      padding: 12px;
    }
  }

  &::after {
    padding: 8px;

    ${media.s} {
      padding: 12px;
    }
  }
`

export default function Favorite({ edges }) {
  const query = useStaticQuery(graphql`
    query FavoriteQuery {
      site {
        siteMetadata {
          amazon
        }
      }
    }
  `).site.siteMetadata

  const amazon = query.amazon

  const link = amazon ? (
    <Links
      href={`https://www.amazon.co.jp/gp/video/offers/ref=atv_pv_new_offer?tag=${amazon}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Amazon Prime Video なら30日間無料・月額500円で映画見放題"
    >
      <Icon />
      <Text>
        30日間無料
        <br />
        月額500円で映画見放題
      </Text>
      <Right />
    </Links>
  ) : (
    ''
  )

  const images = edges.map((edge, i) => <Image key={i} edge={edge} recommend />)

  return (
    <Wrapper>
      {link}
      <Ordered>{images}</Ordered>
    </Wrapper>
  )
}

Favorite.propTypes = {
  edges: PropTypes.array,
}
