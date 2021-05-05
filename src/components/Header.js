import {Flex, Box, Spacer, Heading, Button, WrapItem, Avatar} from '@chakra-ui/react'
import React from 'react'
import { PageNavigation } from './PageNavigation'

export class Header extends React.Component {
  render() {
    const {user} = this.props
    return (
      <Flex bg="blue.100" p={2}>
        <Box p="2">
          <Heading color="blue.700" size="md">💅 Cosmetics Store</Heading>
        </Box>
        <PageNavigation currentPage={this.props.currentPage} changePage={this.props.changePage}/>
        <Spacer />
        <Box>
          {!user && <Button colorScheme="teal">Log in</Button>}
          {user && (
            <WrapItem onClick={this.props.logout}>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </WrapItem>
          )}
        </Box>
      </Flex>
    )
  }
}
