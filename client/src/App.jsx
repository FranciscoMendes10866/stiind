import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'

import { Navbar } from './components'
import { SignUp, SignIn, Admin, Relative, Caregiver } from './pages'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/admin" component={Admin} />
            <Route path="/relative" component={Relative} />
            <Route path="/caregiver" component={Caregiver} />
          </Switch>
        </Router>
      </ChakraProvider>
    </Provider>
  )
}

export default App
