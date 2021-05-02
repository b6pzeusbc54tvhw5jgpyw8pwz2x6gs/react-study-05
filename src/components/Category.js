import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export class Category extends React.Component {
  render() {
    return (
      <Flex bg="yellow.100" p={2}>
        <Text mr={4}>xxx</Text>
        <Text mr={4}>yyy</Text>
        <Text mr={4}>zzz</Text>
      </Flex>
    )
  }
}
