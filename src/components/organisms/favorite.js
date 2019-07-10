import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, media } from '../variable/mixin'
import Image from '../molecules/image'
import Prime from '../../images/icon/prime.svg'
import Arrow from '../../images/icon/arrow.svg'

const Wrapper = styled.section`
  background: var(--c_4);
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  border-radius: 8px;
  margin: 16px 0 0;

  ${media.s`
    margin: 24px 0 0;
    padding: 0;
  `}
`

const Link = styled.a`
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

  ${media.ms`grid-template-columns: 160px 1fr auto;`}

  &:hover,
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

  ${media.xs`font-size: 0.88rem;`}

  ${media.s`font-size: 1rem;`}
`

const Right = styled(Arrow)`
  stroke: var(--c_7);
  height: auto;
  transition: 0.3s;
  width: 16px;

  ${media.s`width: 24px;`}

  ${media.sm`margin: 0 0 0 8px;`}

  ${Link}:hover &,
  ${Link}:focus & {
    transform: translateX(8px);
  }
`

const Ordered = styled.ol`
  border-top: 1px solid var(--c_8);
  display: flex;
  overflow: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  will-change: scroll-position;
  -webkit-overflow-scrolling: touch;

  ${media.s`padding: 16px 0`}

  ${media.sm`padding: 20px 0 24px`}

  &::before,
  &::after {
    content: '';
    display: block;
    height: 100%;

    ${media.s`padding: 12px;`}
  }

  &::after {
    padding: 8px;

    ${media.s`padding: 12px;`}
  }
`

export default function Favorite({ edges }) {
  const images = edges.map((edge, i) => <Image key={i} edge={edge} recommend />)

  return (
    <Wrapper>
      <Link
        href="https://www.amazon.co.jp/gp/video/offers/ref=atv_pv_new_offer?&_encoding=UTF8&tag=handsomekuroji-22&linkCode=ur2&linkId=02064249370a9b29a9f1754f61d3b7b2&camp=247&creative=1211"
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
      </Link>
      <Ordered>{images}</Ordered>
    </Wrapper>
  )
}

Favorite.propTypes = {
  edges: PropTypes.array
}
