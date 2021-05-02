import {Header} from './components/Header'
import {Category} from './components/Category'
import {Content} from './components/Content'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Category/>
        <Content/>
      </div>
    )
  }
}

export default App;
