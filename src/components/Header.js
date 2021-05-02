import {Flex, Box, Spacer, Heading, Button} from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex bg="blue.100" p={2}>
      <Box p="2">
        <Heading size="md">화장품 Store</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal">Log in</Button>
      </Box>
    </Flex>
  )
}
