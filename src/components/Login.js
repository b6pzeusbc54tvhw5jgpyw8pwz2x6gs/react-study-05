import { Button, Flex, Heading, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Center, Input } from "@chakra-ui/react"

export const Login = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  const formBG = useColorModeValue("gray.100", "gray.700")
  return (
    <Center>
      <Flex bg={formBG} direction="column" p={6} rounded={4}>
        <Heading mb={3}>Login</Heading>
        <Input placeholder="example@email.com" mb={3}/>
        <Input placeholder="********" type="password" mb={3}/>
        <Button colorScheme="linkedin" mb={3}>Login</Button>
        <Button colorScheme="facebook" mb={6} onClick={toggleColorMode}>{colorMode} is on</Button>
      </Flex>
    </Center>
  )
}
