import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import {css} from '@emotion/react'
import { axiosInstance } from '../axios-helper'

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
  state = {
    categories: [],
    selected: '',
    loading: false,
  }
  componentDidMount() {
    this.setState({ loading: true })
    axiosInstance.get('/categories.json').then((res) => {
      this.setState({ categories: res.data.data, loading: false })
      this.selectCategory(res.data.data[0])
    })
  }

  selectCategory = (selected) => {
    this.setState({ selected })
    this.props.updateSelectedCategory(selected)
  }

  render() {
    return (
        <Flex bg="yellow.100" p={2} overflow="scroll">
          {this.state.loading && <Text>loading...</Text>}
          {this.state.categories.map(c => (
            <Box
              css={[cssCategory, this.state.selected === c && cssSelected]}
              key={c}
              onClick={() => this.selectCategory(c)}
              mr={3}
            >
              {c}
            </Box>
          ))}
        </Flex>
    )
  }
}
