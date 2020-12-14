import Scene01 from './Pages/Scene01/Scene01'
import Scene02 from './Pages/Scene02/Scene02'
import Scene03 from './Pages/Scene03/Scene03'
import Scene04 from './Pages/Scene04/Scene04'
import GlobalStyle from './styles/globalStyles'
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/acapulco">
          <Scene01 />
        </Route>
        <Route path="/blueberry">
          <Scene02 />
        </Route>
        <Route path="/ak-47">
          <Scene03 />
        </Route>
        <Route path="/banana">
          <Scene04 />
        </Route>
        <Route exact path="/">
          <Redirect to="/acapulco" />
        </Route>
      </Switch>
    </>
  )
}

export default App
