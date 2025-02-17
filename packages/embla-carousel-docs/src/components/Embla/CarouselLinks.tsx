import React from 'react'
import styled from 'styled-components'
import { ContentLink } from 'components/Link/ContentLink'
import { IconWithText } from 'components/Icon/IconWithText'
import { COLORS } from 'consts/themes'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: -2.2rem;
  margin-bottom: 1.2rem;
  margin-left: -1.2rem;
`

const Item = styled.div`
  color: ${COLORS.TEXT_LOW_CONTRAST};
  display: flex;
  align-items: center;
  padding-left: 1.4rem;
  font-size: 1.4rem;
`

const Link = styled(ContentLink)`
  padding: 0.6rem 0;
  border: none;
`

type PropType = { links: { label: string; to: string }[] }

export const CarouselLinks = (props: PropType) => {
  const { links = [] } = props

  return (
    <Wrapper>
      <Item>
        <IconWithText iconSvg="pen" iconSize="1.5rem">
          Edit code:
        </IconWithText>
      </Item>
      {links.map(({ label, to }) => (
        <Item key={to}>
          <Link to={to}>{label}</Link>
        </Item>
      ))}
    </Wrapper>
  )
}
