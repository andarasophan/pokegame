import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import MyBag from './views/MyBag';
import Layout from './layout/Layout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/detail' component={Detail} />
            <Route path='/my-bag' component={MyBag} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
