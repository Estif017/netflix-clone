import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'

import * as ROUTES from './constants/routes'
import Home from './pages/home';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home/>
          </Route>
          <Route path={ROUTES.SIGNIN}>Im sign in</Route>
          <Route path={ROUTES.SIGNUP}>im sign up</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
