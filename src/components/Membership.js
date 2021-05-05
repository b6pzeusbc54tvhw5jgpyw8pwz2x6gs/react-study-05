import { Box } from "@chakra-ui/react"
import React from "react"
import {Login} from './Login'

export class Membership extends React.Component {
  render() {
    if (!this.props.user) {
      return <Login login={this.props.login}/>
    }

    // sm, md, lg, xl, 2xl, ....
    return (
      <Box p={10}>
        {this.props.user}님 안녕하세요. 회원전용 콘텐츠입니다.
      </Box>
    )
  }
}
