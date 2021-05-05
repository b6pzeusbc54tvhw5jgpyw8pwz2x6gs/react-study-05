import React from 'react'
import { VStack } from '@chakra-ui/layout'
import {Header} from './components/Header'
import {Category} from './components/Category'
import {Content} from './components/Content'
import {Membership} from './components/Membership'
import {axiosInstance} from './axios-helper'
import {UserContext} from './contexts/UserContext'

class App extends React.Component {
  state = {
    currentPage: 'Home',
    needOverlayLogin: false,
    user: '',
    selectedCategory: 'lipstick',
    categories: [],
    categoriesLoading: false,
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
  componentDidMount() {
    this.setState({ categoriesLoading: true })
    axiosInstance.get('/categories.json').then((res) => {
      this.setState({ categories: res.data.data, categoriesLoading: false })
      this.updateSelectedCategory(res.data.data[0])
    })
  }

  render() {
    const contextValue = {
      user: this.state.user,
      login: this.login,
      logout: this.logout,
    }
    return (
      <UserContext.Provider value={contextValue}>
        <VStack alignItems="stretch" spacing={0} minH="100vh">
          <Header currentPage={this.state.currentPage} changePage={this.changePage}/>
          <Category categories={this.state.categories} loading={this.state.categoriesLoading} selectedCategory={this.state.selectedCategory} updateSelectedCategory={this.updateSelectedCategory}/>
          {this.state.currentPage === 'Home' && <Content selectedCategory={this.state.selectedCategory}/>}
          {this.state.currentPage === 'Membership' && <Membership />}
        </VStack>
      </UserContext.Provider>
    )
  }
}

export default App;
