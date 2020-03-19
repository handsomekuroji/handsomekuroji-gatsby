import React from 'react'
import { useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, media } from '../../variable/mixin'
import Image from '../molecules/image'
import Prime from '../../../images/icon/prime.svg'
import Arrow from '../../../images/icon/arrow.svg'

const Wrapper = styled.section`
  background: var(--c_4);
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  border-radius: 8px;
  margin: 16px 0 0;

  ${media.s`
    margin: 24px 0 0;
    padding: 0;
  `}

  .favoliteCarousel {
    border-top: 1px solid var(--c_8);
    max-height: fit-content;
    padding: 16px 0;

    ${media.sm`
      padding: 20px 0 24px;
    `}
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

  ${media.s`
    grid-template-columns: 120px 1fr auto;
    padding: 16px 24px;
  `}

  ${media.sm`
    grid-template-columns: 140px 1fr auto;
    padding: 24px;
  `}

  ${media.ms`
    grid-template-columns: 160px 1fr auto;
  `}

  @media (hover: hover) {
    &:hover {
      transition: 0.3s;
    }
  }

  &:focus {
    transition: 0.3s;
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

  ${media.xs`
    font-size: 0.88rem;
  `}

  ${media.s`
    font-size: 1rem;
  `}
`

const Right = styled(Arrow)`
  stroke: var(--c_7);
  height: auto;
  transition: 0.3s;
  width: 16px;

  ${media.s`
    width: 24px;
  `}

  ${media.sm`
    margin: 0 0 0 8px;
  `}

  ${Links}:hover & {
    @media (hover: hover) {
      transform: translateX(8px);
    }
  }

  ${Links}:focus & {
    transform: translateX(8px);
  }
`

export default function Favorite({ edges }) {
  const query = useStaticQuery(graphql`
    query AmpFavoriteQuery {
      site {
        siteMetadata {
          associate
        }
      }
    }
  `).site.siteMetadata

  const link = query.associate ? (
    <Links
      href={`https://www.amazon.co.jp/gp/video/offers/ref=atv_pv_new_offer?&_encoding=UTF8&tag=${query.associate}&linkCode=ur2&linkId=02064249370a9b29a9f1754f61d3b7b2&camp=247&creative=1211`}
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
      <amp-carousel height="300" layout="fixed-height" type="carousel" controls class="favoliteCarousel">
        {images}
      </amp-carousel>
    </Wrapper>
  )
}

Favorite.propTypes = {
  edges: PropTypes.array
}
