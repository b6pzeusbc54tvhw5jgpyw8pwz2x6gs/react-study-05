import {Header} from './components/Header'
import {Content} from './components/Content'
import { Flex } from '@chakra-ui/layout'

function App() {
  return (
    <Flex direction="column" alignItems="stretch" minH="100vh">
      <Header/>
      <Content/>
    </Flex>
  );
}

export default App;
