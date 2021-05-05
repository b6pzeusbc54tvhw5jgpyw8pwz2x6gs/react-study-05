import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import {css} from '@emotion/react'

const cssCategory = css`
  cursor: pointer;
  :hover {
    background-color: pink;
  }
`
const cssSelected = css`
  color: red;
  font-weight: 700;
`

export class Category extends React.Component {
  render() {
    return (
        <Flex bg="yellow.100" p={2} overflow="scroll">
          {this.props.loading && <Text>loading...</Text>}
          {this.props.categories.map(c => (
            <Box
              css={[cssCategory, this.props.selectedCategory === c && cssSelected]}
              key={c}
              onClick={() => this.props.updateSelectedCategory(c)}
              mr={3}
            >
              {c}
            </Box>
          ))}
        </Flex>
    )
  }
}
