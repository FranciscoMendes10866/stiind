import { ThemeProvider } from '@emotion/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { Navbar } from './components'
import { SignUp, SignIn } from './pages'

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App
