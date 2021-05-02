import { Box, SimpleGrid } from "@chakra-ui/react"
import React from "react"

export class Content extends React.Component {
  render() {
    return (
      <SimpleGrid bg="pink.100" columns={[1, 2, 4, 6]} spacing={2} p={2} mb={6}>
        <Box bg="teal.100">1</Box>
        <Box bg="teal.100">2</Box>
        <Box bg="teal.100">3</Box>
        <Box bg="teal.100">4</Box>
        <Box bg="teal.100">5</Box>
        <Box bg="teal.100">6</Box>
        <Box bg="teal.100">7</Box>
        <Box bg="teal.100">8</Box>
      </SimpleGrid>
    )
  }
}
