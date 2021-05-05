import {Box, Heading} from '@chakra-ui/react'
import React from 'react'
import {css} from '@emotion/react'

const cssPage = css`
  font-weight: 400;
  cursor: pointer;
  :hover {
    text-decoration-line: underline;
  }
`

const cssSelectedPage = css`
  font-weight: 700;
  text-decoration-line: underline;
`

export class PageNavigation extends React.Component {
  render() {
    const {currentPage, changePage} = this.props
    return (
      <>
        <Box p="2" onClick={() => changePage('Home')}>
          <Heading size="md" css={[cssPage, currentPage === 'Home' && cssSelectedPage]}>
            Home
          </Heading>
        </Box>
        <Box p="2" onClick={() => changePage('Membership')}>
          <Heading size="md" css={[cssPage, currentPage === 'Membership' && cssSelectedPage]}>
            회원전용
          </Heading>
        </Box>
      </>
    )
  }
}
