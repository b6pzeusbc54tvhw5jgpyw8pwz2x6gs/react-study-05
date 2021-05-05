import React from 'react'
import { Button, Flex, Heading} from "@chakra-ui/react"
import { Center, Input } from "@chakra-ui/react"

export class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }
  setUsername = (e) => {
    this.setState({ username: e.target.value })
  }
  setPassword = (e) => {
    this.setState({ password: e.target.value })
  }
  render() {
    const {username, password} = this.state
    return (
      <Center flex={1}>
        <Flex bg="gray.100" direction="column" p={6} rounded={4} mb={20}>
          <Heading mb={3}>Login</Heading>
          <Input
            value={username}
            onChange={this.setUsername}
            placeholder="example@email.com"
            mb={3}
          />
          <Input
            value={password}
            onChange={this.setPassword}
            placeholder="********"
            type="password"
            mb={3}
          />
          <Button
            colorScheme="linkedin"
            mb={3}
            onClick={() => this.props.login(username)}
          >
            Login
          </Button>
        </Flex>
      </Center>
    )
  }
}
