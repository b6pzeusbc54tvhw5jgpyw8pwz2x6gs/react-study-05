import {Header} from './components/Header'
import {Category} from './components/Category'
import {Content} from './components/Content'
import React from 'react'

class App extends React.Component {
  state = {
    selectedCategory: 'lipstick',
  }
  updateSelectedCategory = (selectedCategory) => {
    this.setState({ selectedCategory })
  }
  render() {
    return (
      <div>
        <Header/>
        <Category selectCategory={this.state.selectedCategory} updateSelectedCategory={this.updateSelectedCategory}/>
        <Content selectedCategory={this.state.selectedCategory}/>
      </div>
    )
  }
}

export default App;
