import React from 'react'
import { ClassNames, ThemeProvider } from '@emotion/react'
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cssPixelBorder } from './styles/styles';
import { AppProvider } from './store/store';

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/detail' component={Detail} />
              <Route path='/my-bag' component={MyBag} />
            </Switch>
          </Layout>

          {/* React Toastify Container */}
          <ClassNames>
            {({ css }) => (
              <ToastContainer
                icon={false}
                autoClose={1000}
                hideProgressBar
                position="top-center"
                toastClassName={css`
                font-family: "Press Start 2P", monospace;
                background: ${theme.colors.white};
                color: ${theme.colors.gray};
                ${cssPixelBorder(theme.colors.white)};
              `}
              />
            )}
          </ClassNames>
        </Router>
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
