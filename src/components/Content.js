import { Box, SimpleGrid, Text, Image , SkeletonCircle , SkeletonText} from "@chakra-ui/react"
import React from "react"
import { axiosInstance } from '../axios-helper'

const Card = (props) => {
  const { api_featured_image, id, name } = props
  return (
    <Box border="1px solid">
      <Image src={api_featured_image} h="120px" w="full" objectFit="cover" />
      <Text>{id}</Text>
      <Text>{name}</Text>
    </Box>
  )
}
export class Content extends React.Component {
  state = {
    loading: false,
    products: [],
  }

  loadProducts = () => {
    if (!this.props.selectedCategory) return

    this.setState({ loading: true })
    axiosInstance.get(`/products.json?product_category=${this.props.selectedCategory}`).then(res => {
      this.setState({ products: res.data.data, loading: false })
    })
  }

  componentDidMount() {
    this.loadProducts()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedCategory !== prevProps.selectedCategory) {
      this.loadProducts()
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      )
    }

    // sm, md, lg, xl, 2xl, ....
    return (
      <SimpleGrid bg="pink.100" columns={[1, 2, 4, 6, 9]} spacing={2} p={2} mb={6}>
        {this.state.products.map(p =>
          <Card key={p.id} {...p} />
        )}
      </SimpleGrid>
    )
  }
}
