import React from 'react'
import { VStack } from '@chakra-ui/layout'
import {Header} from './components/Header'
import {Category} from './components/Category'
import {Content} from './components/Content'
import {Membership} from './components/Membership'

class App extends React.Component {
  state = {
    selectedCategory: 'lipstick',
    currentPage: 'Home',
    needOverlayLogin: false,
    user: '',
  }
  updateSelectedCategory = (selectedCategory) => {
    this.setState({ selectedCategory })
  }
  changePage = (page) => {
    this.setState({ currentPage: page })
  }
  logout = () => {
    const r = window.confirm("로그아웃 하시겠습니까?")
    if (r) this.setState({ user: '' })
  }
  login = (user) => {
    this.setState({ user })
  }
  render() {
    return (
      <VStack alignItems="stretch" spacing={0} minH="100vh">
        <Header user={this.state.user} currentPage={this.state.currentPage} changePage={this.changePage} logout={this.logout}/>
        <Category updateSelectedCategory={this.updateSelectedCategory}/>
        {this.state.currentPage === 'Home' && <Content selectedCategory={this.state.selectedCategory}/>}
        {this.state.currentPage === 'Membership' && <Membership user={this.state.user} login={this.login}/>}
      </VStack>
    )
  }
}

export default App;
